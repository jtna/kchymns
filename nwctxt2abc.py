from music21 import converter
import nwctxtReader, abcWriter
import sys
import os.path

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

    base, ext = os.path.splitext(infile)
    outfile = base + '.abc'

    c.parseFile(infile)
    s = c.stream

    s.write('abc', outfile)
    print(f"Wrote {outfile}")

    exit(0)
