import nwctxt2abc
import os

# script for formatting abc data for inclusion into static html demo
if __name__ == '__main__':

    start = 1
    count = 10
    SCRIPTNAME = 'nwctxt2abc.py'
    HEADER = '%abc-2.2\\n%%titlefont Jua\\n%%vocalfont Jua\\n%%composerfont Jua\\n'

    result = ''

    for i in range(start, start+count):
        infile = f'./data/{i:03d}.nwctxt'
        outfile = f'./data/{i:03d}.abc'

        if os.path.exists(infile):
            print(infile)
            os.system(f'python {SCRIPTNAME} {infile}')

            with open(outfile) as f:
                one = '\\n'.join(line.strip() for line in f)
            one = 'header + \'' + one[len(HEADER):] + '\''
        else:
            one = 'header + \'' + f'T: {i:03d} (not available)' + '\''

        result = result + one + ',\n'

    print(result)
