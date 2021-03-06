# About
kchymns draws and plays sheetmusic, specifically Korean Catholic Hymns (가톨릭 성가). I made it to help with choir practice.
The sheetmusic rendering and playback is handled by [abcjs](https://github.com/paulrosen/abcjs).

# NWC to ABC Notation
The NWC (Noteworthy Composer) fileformat/notation seems to be the de facto standard for exchanging Korean Catholic Hymns in a MIDI-like format. [abcjs](https://github.com/paulrosen/abcjs) does not handle NWC notation natively, yet seemed like best web-based tool out there for doing rendering/playback of MIDI-like files. That means we need to figure out a way to convert NWC to ABC notation.

This is what has worked for me for manual conversion:
1. Convert the NWC to NWCTXT (Save As -> "NWC Text File") in NoteWorthy Composer 2.75 on Windows
2. Convert the NWCTXT to ABC via [this site](https://noteworthycomposer.org/nwc2abcjs)
3. Manually edit some stuff (e.g. add lyrics, merge SA and TB voices into one clef each, etc..)

We'll have to automate this process, since there's 500+ hymns to process.

I'm using NWC files found at this [blog](https://blog.daum.net/m60148/). I've found them to be much better quality than the ones found at [catholic.or.kr](https://maria.catholic.or.kr/sungga/).

# Future Tasks
Roughly in order of priority:

### Generate ABC Files
Grab the NWC files from the [blog](https://blog.daum.net/m60148/) and convert to ABC notation. There may be a better tool to use out there than automating my manual conversion process. Note that the Korean lyrics will likely get messed up due to Noteworthy Composer lacking unicode support, so we'll have to fix that as well.

### Make ABC Files Available
Once the ABC files are generated, how do you make them available on the website? Can I just read the textfile in Javascript, or do I need server-side processing?
Also need a simple UI (e.g. textbox) to let you switch to a different song.

### Create Playlist via URL
I would like to be able to create playlist via URL, e.g. "url?q=258+44+179+255". And some buttons to switch between songs in the playlist.

### More UI Stuff
Prettify the checkboxes, add a "select all", "select none" button that toggles all checkboxes, etc. Need some CSS expertise!

### Repeat Between Two Bar Numbers
[abcjs](https://github.com/paulrosen/abcjs) already has an example of this.

### Emphasize Single Voice
Allow one voice to be louder than others. e.g. instead of turning off 3 other voices, allow them to be quieter.

# Maybe Tasks
### Seek on click
When you click on a note, make the playback seek to that note.

### Allow Changing Voices Without Restart
This would have to be implemented like: get position / stop / re-init / seek.

### Extend to More Hymns
Perhaps add ability to upload any NWC file and generate on the fly.

# Also...
This is my first web project and I have no idea what I'm doing :sweat_smile:. Comments/contributions are welcome!
