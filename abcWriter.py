from music21 import converter, note, stream, meter, spanner, bar, key, environment
import logging
import re, fractions
import os.path
import json

environLocal = environment.Environment()

class AbcWriter(converter.subConverters.SubConverter):

    registerFormats = ('abc',)
    registerOutputExtensions = ('abc',)

    nuql = 1.0 # note unit quarterlength
    MEASURESPERLINE = 4
    UNIHYPHEN = '‐' # unicode hyphen
    metadata = {}

    def get_note_name(self, n, obj):
        try:
            currentKey = obj.flat.getElementsByClass('KeySignature')[0]
        except IndexError:
            currentKey = key.KeySignature(0)

        # set name for ABC notation
        postfix = ("", "", ",,", ",", "", "", "'", "''")
        name = n.step
        if n.pitch.accidental != currentKey.accidentalByStep(n.step):
            try:
                if n.pitch.accidental.displayStatus:
                    acc2str = {'♭':'_', '𝄫':'__', '♮':'=', '♯':'^', '𝄪':'^^'}
                    acc = acc2str.get(n.pitch.accidental.unicode, '')
                    name = acc + name
            except AttributeError:
                # TODO: this occurs if there's a key change in the middle of the tune
                # index 288, 467 and 504
                logging.warning(f"Unexpected accidental")
        name = name + postfix[n.octave]
        if n.octave > 4:
            name = name.lower()
        return name

    def make_note(self, n, obj):
        # ties and slurs
        sb = ''
        se = ''
        try:
            if n._tieType:
                if n._tieType == 'start' or n._tieType == 'continue':
                    se = '-'
                # a note with a tie should have an empty lyric char, not a hyphen
                # this is a common mistake in NWC files that people generate, and we correct it here
                if n.lyric == self.UNIHYPHEN:
                    n.lyric = '_'
        except AttributeError:
            pass

        # ties and slurs are not mutually exclusive (e.g. #194)
        spanners = n.getSpannerSites('Slur')
        for sp in spanners:
            # slur beginning and end are also not mutually exclusive
            if sp.isFirst(n):
                sb = sb + '('
            if sp.isLast(n):
                se = se + ')'

        name = self.get_note_name(n, obj) if type(n) is note.Note else 'z'

        f = n.duration.quarterLength / self.nuql
        # TODO: triplet notation disabled for now. both render and playback have issues, e.g. index 57
        if 0 and hasattr(n, '_triplet'):
            f = n.duration.quarterLengthNoTuplets / self.nuql
            if hasattr(n, '_tripletPrefix'):
                name = n._tripletPrefix + name

        if f == 1.0:
            dur = ''
        else:
            dur = str(fractions.Fraction(f).limit_denominator(32)).lstrip('1')
            if dur == '/2':
                dur = '/'

        # beams
        bb = ' '
        if n.isNote and len(n.beams):
            beam = n.beams.beamsList[0]
            if beam.type == 'stop':
                pass
            else:
                if dur == '/' or not dur:
                    bb = ''
                else:
                    bb = '`' # backquotes used for legibility

        return sb + name + dur + se + bb

    def preprocess(self, obj):
        for p in obj.parts:
            # if we run makeAccidentals on the part (rather than the measure),
            # it does things like add naturals for an accidental in a previous measure
            for m in p.getElementsByClass('Measure'):
                m.makeAccidentals(inPlace=True, cautionaryNotImmediateRepeat=False)

        # set convenience properties in Part objects
        for p in obj.parts:
            clef = p.flat.getElementsByClass('Clef')
            p._clef = 'treble' # default
            if len(clef):
                name = clef[0].name
                if name == 'bass' or name == 'treble':
                    p._clef = name
                else:
                    logging.warning(f"Unsupported clef {name} in {repr(p)}")
            else:
                logging.warning(f"No clef in {repr(p)}")

        numparts = 0
        for p in obj.parts:
            muted = p._staffProperties.get('Muted', '').lower()
            p._muted = True if (muted == 'y') else False
            visible = p._staffProperties.get('Visible', '').lower()
            p._visible = True if (visible == 'y') else False
            p._disabled = p._muted or not p._visible
            if not p._disabled:
                numparts += 1

        if numparts < 4:
            logging.warning(f"Found {numparts} enabled parts. Forcing enable of first 4")
            for p in obj.parts[0:4]:
                p._disabled = False
        elif numparts > 4:
            logging.warning(f"Found {numparts} enabled parts. Forcing disable of 5th part and up")
            n = 0
            for p in obj.parts:
                if not p._disabled:
                    n += 1
                p._disabled = (n > 4)

        # sanitize part id strings
        part_ids = ['S','A','T','B']
        for i,p in enumerate(obj.parts):
            p._id = part_ids[i] if i<4 else p.id

        for p in obj.parts:
            p._repeatStart = 0
            p._repeatEnd = None
            mnum = -1
            for el in p.recurse():
                if type(el) is stream.Measure:
                    mnum += 1
                elif type(el) is bar.Repeat and el.direction == 'start':
                    p._repeatStart = mnum
                elif type(el) is bar.Repeat and el.direction == 'end':
                    p._repeatEnd = mnum
                    break
        # local repeats often appear like this:
        # open:
        #   |Bar
        #   |Bar|Style:LocalRepeatOpen|Visibility:Never
        # close:
        #   |Bar|Style:LocalRepeatClose|Repeat:3|Visibility:Never
        # and they end up adding an empty measure each when parsed.
        # these could be deleted (using repeat.deleteMeasures, based on len(measure) == 0)

        # handle triplets
        for p in obj.parts:
            count = 0
            nstart = None
            for n in p.recurse().getElementsByClass('Note'):
                try:
                    if n._triplet == 'First':
                        nstart = n
                except AttributeError:
                    pass

                if nstart:
                    count += 1

                try:
                    if n._triplet == 'End':
                        if count == 3:
                            prefix = f'(3'
                        else:
                            # 'put p notes into the time of q for the next r notes'
                            prefix = f'(3:2:{count}'
                        count = 0
                        nstart._tripletPrefix = prefix
                        nstart = None
                except AttributeError:
                    pass

        # find most common note length
        durations = {}
        for n in obj.flat.notesAndRests:
            dur = n.duration.quarterLength
            try:
                durations[dur] += 1
            except KeyError:
                durations[dur] = 1
        common = max(durations, key=durations.get)
        self.nuql = common
        #print(f'durations: {durations}')

    def make_score_directive(self, obj):
        # try to pair two parts that (are not disabled), (are sequential) and (have the same clef)
        sd = "%%score "
        pair = []
        ps = ''
        for p in obj.parts:
            if p._disabled: continue
            if not len(pair):
                pair.append(p)
            elif p._clef == pair[0]._clef:
                pair.append(p)

            if (len(pair) == 2) or (p is obj.parts[-1]):
                s = ' '.join(x._id for x in pair)
                ps = ps + f'({s}) '
                pair.clear()
        if ps:
            ps = ps.rstrip()
            ps = '[' + ps + ']'
        sd = sd + ps + '\n'
        return sd

    def make_header(self, obj):
        header = '%abc-2.2\n'
        title = ''
        authors = []

        try:
            title = self.metadata['index'] + ' ' + self.metadata['title']
            authors = self.metadata['composer'].split(', ')
        except (AttributeError, KeyError):
            title = obj._nwcSongInfo['title']
            authors.append(obj._nwcSongInfo['author'])
            if title:
                r = re.search('(가톨릭\s*성가\s*)(\d+)\s*-\s*(.+)', title)
                if r:
                    title = r.group(2).lstrip('0') + ' ' + r.group(3)
        finally:
            if title:
                header = header + 'T: ' + title + '\n'
            for author in authors:
                header = header + 'C: ' + author + '\n'

        # key and time signatures are pulled from the first not-muted part
        p = next((pp for pp in obj.parts if not pp._disabled), None)

        if not p:
            logging.warning(f"No part found in score")

        if p:
            ts = p.flat.getElementsByClass('TimeSignature')
            if ts:
                mstr = str(ts[0].numerator) + '/' + str(ts[0].denominator)
                lstr = str(fractions.Fraction(self.nuql/4).limit_denominator(32)) # L: note unit length
                header = header + 'M: ' + mstr + '\n'
                header = header + 'L: ' + lstr + '\n'
            else:
                logging.warning(f"No time signature found in {p}")

        # tempo is pulled from the first mm found in the score
        mm = obj.flat.getElementsByClass('MetronomeMark')
        if mm:
            header = header + 'Q: ' + mm[0]._tempo + '\n'
        else:
            logging.warning(f"No tempo found in score")

        if p:
            try:
                ks = p.flat.getElementsByClass('KeySignature')[0]
                kstr = ks.asKey().name
                kstr = kstr.replace('major', '')
                kstr = kstr.replace('-', 'b')
                kstr = kstr.strip()
                header = header + 'K: ' + kstr + '\n'
            except IndexError:
                pass
                #logging.warning(f"No key signature found in {p}")

        # TODO: check all parts against the key and time signatures we've chosen
        return header

    def make_voices(self, obj):
        try:
            layout_hint = [int(char) for char in self.metadata['layoutHint']] # convert from string to array
        except (AttributeError, KeyError):
            layout_hint = None

        voices = ''
        #instruments = (48, 73, 57, 60, 0, 0)

        fparts = filter(lambda p: not p._disabled, obj.parts)

        for vnum, p in enumerate(fparts):
            ps = 'V: ' + p._id + ' clef=' + p._clef + '\n'
            #ps = ps + f'%%MIDI program {instruments[vnum]}\n'
            voices = voices + ps

            x = 0 # current measure
            y = 0 # current line
            total = 0 # total measures (measure.number is not set by nwcReader and all default to 0)
            ws = ''
            end_measure = None if not p._repeatEnd else (p._repeatEnd + 1)
            measures = p.getElementsByClass('Measure')[p._repeatStart:end_measure]
            for m in measures:
                ms = ''
                for n in m.notesAndRests:
                    ms = ms + self.make_note(n, obj)
                    if (vnum == 0) and n.lyric:
                        ws = ws + n.lyric + ' '

                voices = voices + ms + '| '
                total += 1
                x += 1

                is_newline = False
                if layout_hint and len(layout_hint) > y:
                    if x == layout_hint[y]:
                        is_newline = True
                else:
                    if (total % self.MEASURESPERLINE == 0):
                        is_newline = True

                is_last = (m is measures[-1])

                if is_newline or is_last:
                    voices = voices[:-1] + (']\n' if is_last else '\n')
                    x = 0
                    y += 1
                    if ws:
                        voices = voices + 'w: ' + ws[:-1] + '\n'
                        ws = ''

        if layout_hint:
            if sum(layout_hint) != total:
                logging.warning(f"Layout hint sum {sum(layout_hint)} != total measures {total}")

        return voices

    def read_metadata(self, abcfp):
        (pre, ext) = os.path.splitext(abcfp)
        metaname = pre + '.json'
        basename = os.path.basename(abcfp)
        index = os.path.splitext(basename)[0].lstrip('0')

        try:
            with open(metaname) as f:
                data = json.load(f)
                self.metadata = data
                self.metadata['index'] = index
        except FileNotFoundError:
            pass

    def write(self, obj, fmt, fp=None, subformats=None, **keywords):
        music = ''
        if fp is None:
            fp = environLocal.getTempFile('.abc')

        self.read_metadata(fp)
        self.preprocess(obj)

        music = music + self.make_header(obj)
        music = music + self.make_score_directive(obj)
        music = music + self.make_voices(obj)

        with open(fp, 'w') as f:
            f.write(music)

        return fp
