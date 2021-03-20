# About
This is a demo of drawing and playback of Korean catholic hymns (가톨릭 성가). I made it to help with SATB part practice. Individual voices can be turned on/off. A cursor follows the current note being played on the sheetmusic.

# How it works
The sheetmusic rendering and playback is handled by [abcjs](https://github.com/paulrosen/abcjs). This was the best tool that I could find that handles both render and playback. The music data needs to be in [ABC notation](https://en.wikipedia.org/wiki/ABC_notation).

I built a webcrawler-like tool and downloaded NWC (Noteworthy Composer) files of hymns. From there, the NWC (binary) files are converted to NWCTEXT (text) using "nwc-conv.exe", a Windows command-line tool that comes with Noteworthy Composer. This conversion was necessary to make it easier to reverse-engineer the format.

After that, I used [music21](https://web.mit.edu/music21/), a python-based library as a framework to read the NWCTEXT file (nwctxtReader.py) and convert it to a ABC file (abcWriter.py). Using music21 as a framework means that other music notation formats (e.g. MusicXML) could easily be supported in the future.

# Future Tasks
Roughly in order of priority:

### Reduce load times
The audio buffer that is used for plabyack is created on the client and appears to take several seconds (or more) per song. Also, this process is not interruptible, which makes the UI feel a bit sluggish. Maybe there's a way to speed this process up a bit, but it'll require hacking the abcjs library.

### Move to a webserver
This will allow a bunch of other things that currenly aren't possible on a static webpage. I've decided on using PHP, but that's about it for now.

### Create playlist via URL
I would like to be able to create playlist via URL, e.g. "url?q=258+44+179+255". And some buttons to switch between songs in the playlist.

### Repeat between two bar numbers
abcjs already has an example of this.

### Improve playback quality
There are certainly limitations to how well we can make this sound, but I think we can do better. For some reason, it sounds noticably worse on mobile platforms, so that needs to be looked at.

### Support for missing music elements
Things like fermatas, repeats are currently not handled. Also, some lyrics are not aligned correctly to their notes.

### Seek on click
When you click on a note, make the playback seek to that note.

### Support for URL as an input
The user could specify a URL of a webpage that contains an NWC file attachment. This is then converted on-the-fly on the server and then served. The specific example I'm thinking of is the Responsorial Psalm (화답송), which people upload on [maria.catholic.or.kr](https://maria.catholic.or.kr/sungga/bbs/bbs_list.asp?menu=4828).

### Emphasize Single Voice
Allow one voice to be louder than others. e.g. instead of turning off 3 other voices, allow them to be quieter.

# Also...
This is my first web project and I have no idea what I'm doing :sweat_smile:. I appreciate any comments / feedback! I'm also looking for others that are interested in building this out further together.
