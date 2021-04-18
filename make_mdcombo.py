import os, re, json

def make_mdcombo():
    with open('./data/mdcombo.js', 'w') as fout:
        fout.write('const mdcombo = [\n');

        for i in range(1, 528+1):
            fname = f'./data/{i:03d}.json'

            with open(fname) as fin:
                data = json.load(fin)
                fcomp = ''
                comps = data['composer']
                if comps:
                    comps = comps.replace('\'', '') # e.g. "St. Basil's"
                    comps = comps.replace('/', '') # e.g. "작사/작곡"
                    comps = comps.replace('.', '') # e.g. "Albert G. Stein"
                    comps = comps.split(',')

                    for c in comps:
                        c = c.removesuffix('작곡')
                        c = c.removesuffix('편곡')
                        c = c.removesuffix('선곡')
                        c = c.removesuffix('작사')
                        c = c.removesuffix('역사')
                        c = c.removesuffix('개작')
                        c = c.strip()
                        fcomp += c + ' '
                    fcomp = fcomp.strip()

                fout.write(f"   '{str(i)}, {data['title']}, {fcomp}, {data['firstPhrase']}, {data['season']}',\n")

        fout.write('];\n')

if __name__ == '__main__':
    make_mdcombo()
