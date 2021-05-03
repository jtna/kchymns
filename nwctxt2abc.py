from music21 import converter
import nwctxtReader, abcWriter
import sys, os.path, getopt

def usage(scriptname):
    print(f"Usage: {scriptname} [options] nwctxtfile")
    print(f"  --off: measure offset to begin abcWriter. -1 tries to find a repeat")

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

    try:
        opts, args = getopt.getopt(sys.argv[1:], 'h', ['off='])
    except getopt.GetoptError:
        usage(sys.argv[0])
        sys.exit(2)

    if not args:
        usage(sys.argv[0])
        sys.exit(2)

    moffset = -1 # default
    for o, a in opts:
        if o in ("-h"):
            usage(sys.argv[0])
            sys.exit()
        elif o in ("--off"):
            moffset = a
        else:
            assert False, "unhandled option"

    infile = args[0]
    if not os.path.exists(infile):
        print(f"Error: {infile} doesn't exist")
        sys.exit(1)

    base, ext = os.path.splitext(infile)
    outfile = base + '.abc'

    c.parseFile(infile)
    s = c.stream

    s.write('abc', outfile, offset=moffset)
    print(f"Wrote {outfile}")

    exit(0)
