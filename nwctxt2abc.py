from music21 import converter
import nwctxtReader, abcWriter
import sys
import os.path

def sanitize_nwctxt(fname):
    # some files coming out of nwc_conv.exe have an invalid char in the font name, e.g.
    # |Font|Style:StaffLyric|Typeface:"xB1
    TRIGGER = '|Font|'
    found = False

    with open(fname, 'r', errors='ignore') as f:
        lines = f.readlines()

    clines = []
    for line in lines:
        if not line.startswith(TRIGGER):
            clines.append(line)

    if len(clines) == len(lines):
        return

    with open(fname, 'w') as f:
        f.writelines(clines)

if __name__ == '__main__':
    converter.registerSubconverter(abcWriter.AbcWriter)

    # unregister the default nwctext subconverter
    nwcConverter = converter.subConverters.ConverterNoteworthy
    converter.unregisterSubconverter(nwcConverter)
    # register ours
    converter.registerSubconverter(nwctxtReader.ConverterNwctext)
    # TODO: even though we've unregistered/registered, our converter doesn't get invoked if
    # the file extension is .nwctxt; it invokes the default converter..
    # format='noteworthytxt' doesn't override it. Possibly a bug in the library

    # force ours
    c = nwctxtReader.ConverterNwctext()

    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} nwctxtfile")
        sys.exit(1)

    infile = sys.argv[1]
    if not os.path.exists(infile):
        print(f"Error: {infile} doesn't exist")
        sys.exit(1)

    sanitize_nwctxt(infile)

    base, ext = os.path.splitext(infile)
    outfile = base + '.abc'

    c.parseFile(infile)
    s = c.stream

    s.write('abc', outfile)
    print(f"Wrote {outfile}")

    exit(0)
