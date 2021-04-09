from music21 import converter, note, stream, meter, spanner, bar, key, environment
import logging
import re, fractions
import os.path

environLocal = environment.Environment()

class AbcWriter(converter.subConverters.SubConverter):

    registerFormats = ('abc',)
    registerOutputExtensions = ('abc',)

    nuql = 1.0 # note unit quarterlength
    MEASURESPERLINE = 4
    measurehints = []

    def get_note_name(self, n, obj):
        try:
            currentKey = obj.flat.getElementsByClass('KeySignature')[0]
        except IndexError:
            currentKey = key.KeySignature(0)

        # set name for ABC notation
        postfix = ("", "", ",,", ",", "", "", "'", "''")
        name = n.step
        if n.pitch.accidental != currentKey.accidentalByStep(n.step):
            if n.pitch.accidental.displayStatus:
                acc2str = {'♭':'_', '♭♭':'__', '♮':'=', '♯':'^', '♯♯':'^^'}
                acc = acc2str.get(n.pitch.accidental.unicode, '')
                name = acc + name
        name = name + postfix[n.octave]
        if n.octave > 4:
            name = name.lower()
        return name

    def make_note(self, n, obj):
        # ties and slurs
        sb = ''
        se = ''
        if n.tie:
            if n.tie.type == 'start':
                se = '-'
        else: # assume ties and slurs are mutually exclusive
            spanners = n.getSpannerSites()
            for sp in spanners:
                if type(sp) is spanner.Slur:
                    if sp.isLast(n):
                        se = se + ')'
                    if sp.isFirst(n):
                        sb = sb + '('

        name = self.get_note_name(n, obj) if type(n) is note.Note else 'z'

        f = n.duration.quarterLength / self.nuql
        if f == 1.0:
            dur = ''
        else:
            dur = str(fractions.Fraction(f).limit_denominator(32)).lstrip('1')

        # beams
        bb = ' '
        if n.isNote and len(n.beams):
            beam = n.beams.beamsList[0]
            if beam.type == 'stop':
                pass
            else:
                bb = '``' # backquotes used for legibility (normally just no-spaces)

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

        for p in obj.parts:
            p._repeatStart = 0
            mnum = 0
            for el in p.recurse():
                if type(el) is stream.Measure:
                    mnum += 1
                elif type(el) is bar.Repeat and el.direction == 'start':
                    p._repeatStart = mnum - 1
                    break

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
        for p in obj.parts:
            if p._disabled: continue
            if not len(pair):
                pair.append(p)
            elif p._clef == pair[0]._clef:
                pair.append(p)

            if (len(pair) == 2) or (p is obj.parts[-1]):
                s = ' '.join(x.id for x in pair)
                sd = sd + f'({s})'
                pair.clear()
        sd = sd + '\n'
        return sd

    def make_header(self, obj):
        header = '%abc-2.2\n'
        header = header + '%%titlefont Jua\n'
        header = header + '%%vocalfont Jua\n'
        header = header + '%%composerfont Jua\n'
        title = obj._songInfo['title']
        author = obj._songInfo['author']
        author = author.removesuffix(' 작곡')

        if title:
            r = re.search('(가톨릭\s*성가\s*)(\d+)\s*-\s*(.+)', title)
            if r:
                title = r.group(2) + ' ' + r.group(3)
            header = header + 'T: ' + title + '\n'
        if author:
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

    def make_voices(self, obj, measure_hint):
        voice = ''
        voicenum = 0
        #instruments = (48, 73, 57, 60, 0, 0)

        for p in obj.parts:
            if p._disabled: continue

            ps = 'V: ' + p.id + ' clef=' + p._clef + '\n'
            #ps = ps + f'%%MIDI program {instruments[voicenum]}\n'
            voice = voice + ps
            voicenum += 1

            x = 0 # current measure
            y = 0 # current line
            num = 0 # total measures (measure.number is not set by the nwc reader and all default to 0)
            ws = ''
            measures = p.getElementsByClass('Measure')[p._repeatStart:]
            for m in measures:
                ms = ''
                for n in m.notesAndRests:
                    ms = ms + self.make_note(n, obj)
                    if n.lyric:
                        ws = ws + n.lyric + ' '

                if ms: # skip empty measures in nwctxt TODO: this may be due to repeat bars
                    voice = voice + ms + '| '
                    num += 1
                    x += 1

                is_newline = False
                if measure_hint and len(measure_hint) > y:
                    if x == measure_hint[y]:
                        is_newline = True
                else:
                    if (num % self.MEASURESPERLINE == 0):
                        is_newline = True

                if is_newline or (m is measures[-1]):
                    voice = voice[:-1] + '\n'
                    x = 0
                    y += 1
                    if ws:
                        voice = voice + 'w: ' + ws[:-1] + '\n'
                        ws = ''
                # TODO: decide how we'll handle repeats

        if measure_hint:
            if sum(measure_hint) != num:
                logging.warning(f"Measure hint sum {sum(measure_hint)} != total measures {num}")

        return voice

    def read_metadata(self, index):
        index -= 1
        with open('data/measurehints.txt') as f:
            lines = f.readlines()
            if len(lines) > index:
                line = lines[index].rstrip()
                self.measurehints = [int(char) for char in line]

    def write(self, obj, fmt, fp=None, subformats=None, **keywords):
        music = ''
        if fp is None:
            fp = environLocal.getTempFile('.abc')

        basename = os.path.basename(fp)
        split = os.path.splitext(basename)
        self.read_metadata(int(split[0]))

        self.preprocess(obj)
        music = music + self.make_header(obj)
        music = music + self.make_score_directive(obj)
        music = music + self.make_voices(obj, self.measurehints)

        with open(fp, 'w') as f:
            f.write(music)

        return fp
