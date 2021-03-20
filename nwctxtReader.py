from music21 import stream, key, note, tempo, converter, repeat, beam
from music21.beam import BeamException
from music21.noteworthy.translate import NoteworthyTranslator
from music21.noteworthy.translate import NoteworthyTranslateException

class NwctxtReader(NoteworthyTranslator):

    UNIHYPHEN = '‐' # unicode hyphen

    def parseList(self, dataList):
        # Main
        for pi in dataList:
            pi = pi.rstrip()
            if pi.startswith('|') is False:
                continue
            sections = pi.split('|')
            command = sections[1]
            attributes = {}
            for attribute in sections[2:]:
                try:
                    (name, value) = attribute.split(':', 1)
                    attributes[name] = value
                except ValueError:
                    if attribute.strip() == '':
                        pass
                    else:
                        raise NoteworthyTranslateException(
                            f'Cannot unpack value from {attribute} in {pi}')

            if command == 'Note':
                self.translateNote(attributes)
                self.lyricPosition += 1
            elif command == 'Clef':
                self.createClef(attributes)
            elif command == 'Rest':
                self.translateRest(attributes)
            elif command == 'Key':
                self.createKey(attributes)
            elif command == 'TimeSig':
                self.createTimeSignature(attributes)
            elif command == 'Chord':
                self.translateChord(attributes)
                self.lyricPosition += 1
            elif command == 'AddStaff':
                self.createPart(attributes)
                self.currentKey = key.KeySignature(0)
                self.activeAccidentals = {}
                self.lyrics = []
                self.lyricPosition = 0
            elif command == 'Lyric1':
                self.lyrics = self.createLyrics(attributes)
            elif command == 'Bar':
                self.createBarlines(attributes)
            elif command == 'Flow':
                self.createOtherRepetitions(attributes)
            elif command == 'DynamicVariance':
                self.createDynamicVariance(attributes)
            elif command == 'Dynamic':
                self.createDynamics(attributes)
            elif command == 'Tempo':
                self.createTempo(attributes)
            elif command == 'StaffProperties':
                self.setStaffProperties(attributes)
            elif command == 'SongInfo':
                self.setSongInfo(attributes)

        # Add the last Stuff
        if self.currentMeasure:
            self.currentPart.append(self.currentMeasure)

        self.score.insert(0, self.currentPart)

        # print('SHOW')
        # totalscore.show('text')
        # totalscore.show()
        return self.score

    def translateNote(self, attributes):
        NoteworthyTranslator.translateNote(self, attributes)

        # set name for ABC notation
        n = self.currentMeasure[-1]
        postfix = ("", "", ",,", ",", "", "", "'", "''")
        name = n.step
        if n.pitch.accidental != self.currentKey.accidentalByStep(n.step):
            acc2str = {'♭':'_', '♭♭':'__', '♮':'=', '♯':'^', '♯♯':'^^'}
            acc = acc2str.get(n.pitch.accidental.unicode, '')
            name = acc + name
        name = name + postfix[n.octave]
        # TODO: must test a note with natural sign. let's do some grepping for notes in nwctxt
        # git grep -Eo "Pos:[nb#xv]{1}-?[[:digit:]]+" -- data/*.nwctxt
        if n.octave > 4:
            name = name.lower()
        n._name = name

        optstr = attributes.get('Opts', '')
        optlist = optstr.split(',')
        opts = {}
        for opt in optlist:
            try:
                (name, value) = opt.split('=', 1)
            except ValueError:
                name = opt
                value = ''
            finally:
                opts[name] = value

        hold = (self.lyrics and self.lyricPosition > -1 and n.tie and n.tie.type == 'stop') # in a tie
        extend = self.lyrics and len(n.getSpannerSites()) # in a slur
        always = opts.get('Lyric', '') == 'Always'
        never = opts.get('Lyric', '') == 'Never'

        if never:
            n.lyric = '*' # skip lyric for one note
            self.lyricPosition -= 1 # undo previous add
        elif hold and not always:
            n.lyric = '_'
            self.lyricPosition -= 1
        elif extend and not always:
            n.lyric = self.UNIHYPHEN
            self.lyricPosition -= 1

        if 'Beam' in opts:
            dic = {'First':'start', 'End':'stop', '':'continue'}
            typ = dic[opts['Beam']]
            dur = n.duration.type
            try:
                n.beams.fill(dur, typ)
            except BeamException:
                pass

    def createTempo(self, attributes):
        '''
        |Tempo|Base:Half|Tempo:60|
        '''
        # key: nwctxt string, value: (abc string, referent quarterlength)
        bdict = {'Eighth':('1/8',0.5), 'Eighth Dotted':('3/16',0.75), 'Quarter':('1/4',1.0),\
                'Quarter Dotted':('3/8',1.5), 'Half':('1/2',2.0), 'Half Dotted':('3/4',3.0)}
        b = attributes.get('Base', 'Quarter')
        base = bdict[b]
        temponum = int(attributes.get('Tempo', 80))
        mm = tempo.MetronomeMark(None, temponum, note.Note(quarterLength=base[1]))
        mm._tempo = base[0] + '=' + str(temponum)
        self.currentMeasure.append(mm)

    def createPart(self, attributes):
        # attribute is e.g. '"Soprano"'
        name = attributes.get('Name', '').strip('"').strip()
        label = attributes.get('Label', '').strip('"').strip()
        # can't use name with whitespace
        if ' ' in name: name = ''
        if ' ' in label: label = ''
        partName = label or name

        if not partName:
            partName = str(len(self.score.parts) + (1 if self.currentPart else 0) + 1)

        NoteworthyTranslator.createPart(self)
        self.currentPart.id = partName

    def setStaffProperties(self, attributes):
        p = self.currentPart
        # StaffProperties come in two lines
        if not '_staffProperties' in dir(p):
            p._staffProperties = {}
        p._staffProperties |= attributes

    def createLyricsKr(self, attributes):
        # the handling of syllables is very different from english lyrics

        lyrics = []
        allText = attributes['Text']
        #print(allText)

        allText = allText.strip('"')
        allText = allText.strip()
        allText = allText.replace('\\n', ' ')

        allText = allText.replace(' -', f' {self.UNIHYPHEN}') # ascii hyphen has special meaning in abc notation
        allText = allText.replace('-', ' ') # any remaining ascii ones can now just be removed
        allText = allText.removeprefix('1.') # remove verse indicator, if it's there
        lyrics = allText.split()

        #print(lyrics)
        return lyrics

    def createLyrics(self, attributes):
        return self.createLyricsKr(attributes)

    def setSongInfo(self, attributes):
        title = attributes.get('Title', '')
        author = attributes.get('Author', '')
        title = title.strip().strip('"')
        author = author.strip().strip('"')

        self.score._songInfo = {}
        self.score._songInfo['title'] = title
        self.score._songInfo['author'] = author

    def getMultiplePitchesFromPositionInfo(self, posInfo):
        # this fixes a bug in the parent's function:
        # |Chord|Dur:Half|Pos:3^,5^
        # it should strip '^' from all pitches, but in only does it for the last one
        posList = []
        for pos in posInfo.split(','):
            pos = pos.rstrip('^')
            posList.append(pos)
        posInfo = ','.join(posList)
        return NoteworthyTranslator.getMultiplePitchesFromPositionInfo(self, posInfo)

    def getOnePitchFromPosition(self, pos):
        pos = pos.removesuffix('!3') # TODO: not sure what this does
        return NoteworthyTranslator.getOnePitchFromPosition(self, pos)

    def createOtherRepetitions(self, attributes):
        try:
            NoteworthyTranslator.createOtherRepetitions(self, attributes)
        except NoteworthyTranslateException:
            style = attributes['Style']
            if style == 'DalSegno':
                g = repeat.DalSegno()
            elif style == 'DSalFine':
                g = repeat.DalSegnoAlFine()
            self.currentMeasure.append(g)

class ConverterNwctext(converter.subConverters.SubConverter):
    registerFormats = ('noteworthytxt',)
    registerInputExtensions = ('nwctxt',)

    def parseData(self, nwcData):
        self.stream = NwctxtReader().parseString(nwcData)

    def parseFile(self, fp, number=None):
        self.stream = NwctxtReader().parseFile(fp)
