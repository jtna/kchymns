import sys
import os.path

# as a side effect, this also seems to format other korean text properly
def sanitize_nwctxt(fname):
    # some files coming out of nwc_conv.exe have an invalid char in the font name, e.g.
    # |Font|Style:StaffLyric|Typeface:"xB1
    TRIGGER = '|Font|'
    found = False

    print(f'Process: {fname}')

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
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} [nwctxtfile or directory]")
        sys.exit(1)

    path = sys.argv[1]
    if not os.path.exists(path):
        print(f"Error: {inpath} doesn't exist")
        sys.exit(1)

    if os.path.isdir(path):
        for file in os.listdir(path):
            if file.endswith(".nwctxt"):
                sanitize_nwctxt(path+file)
    else:
        sanitize_nwctxt(path)
