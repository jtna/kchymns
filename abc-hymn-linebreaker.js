(function(abcLineBreaker){
    //Private Property
    const rex_partition_metadata_data = /(?<metadata>.*?)(?<score>V:.*)/gms
    const rex_partition =/(?<part>V:\s.*\n)(?<note>[\s\S]*?(?=(?<temp>V:|$)))/g
    const rex_lyric = /^w:\s(?<lyric>.*?)$/gms
    const rex_newline = /(\r\n|\r|\n)/g
    
    let isAscending = function (arr) {
      return arr.every(function (x, i) {
          return i === 0 || x >= arr[i - 1]
      });
    }
    let resetRegexExpressions = function() {
      rex_partition_metadata_data.lastIndex = 0
      rex_partition.lastIndex = 0 
      rex_lyric.lastIndex = 0
      rex_newline.lastIndex = 0 
    }
    //Public Method
    abcLineBreaker.toString = function() {
      return "LineBreaker"
    };
    abcLineBreaker.partitionMetaScore = function(abcNotationStr) {
        var re1 = rex_partition_metadata_data.exec(abcNotationStr)
        return { metadata: re1.groups.metadata , score: re1.groups.score }
    }
    abcLineBreaker.partitionNotes = function(abcScore) {
      var part = []
      for(let i = 0; (re1 = rex_partition.exec(abcScore)) !== null; i++) { part[i] = re1 }
      return {  soprano:  {part: part[0].groups.part, note: part[0].groups.note}, 
                alto:     {part: part[1].groups.part, note: part[1].groups.note}, 
                tenor:    {part: part[2].groups.part, note: part[2].groups.note}, 
                bass:     {part: part[3].groups.part, note: part[3].groups.note}, }
    }
    abcLineBreaker.checkWrap = function(totalNum, breakPositionArr) {
      if (!isAscending(breakPositionArr))
        throw 'Break position element should be ascending!';
      // TODO
      // last num > total bars
    }
    abcLineBreaker.adjustWrap = function(totalNum, breakPositionArr) {
      if (breakPositionArr[breakPositionArr.length-1] != breakPositionArr.length)
      breakPositionArr.push(totalNum)
    }
    abcLineBreaker.break = function(partArr, breakPositionArr) {
      var start = 0
      var startLyric = 0
      var [lyric, soprano, alto, tenor, bass] = partArr
      var sopranoStr  = soprano.part
      var altoStr     = alto.part
      var tenorStr    = tenor.part
      var bassStr     = bass.part
      breakPositionArr.forEach( (e, i) => {
        const rex_count = /[\|\s]*(?<note>.*?)(\s+|``|\|)/gms
        var _merged= soprano.note.slice(start, e).join('')
        if (!_merged || _merged.trim == '')
          return
        console.log('_merged',_merged)
        var merged = soprano.note.slice(start, e).join(' | ')
        sopranoStr +=  merged + ' |\n'
        var _cnt =  _merged.match(rex_count).length
        rex_count.lastIndex = 0
        // Adding lyrics to soprano
        sopranoStr += 'w: ' + lyric.slice(startLyric, _cnt+startLyric).join(' ') + '\n'
        startLyric += _cnt
        altoStr += alto.note.slice(start, e).join(' | ').trim() + ' |\n'
        tenorStr += tenor.note.slice(start, e).join(' | ').trim() + ' |\n'
        bassStr += bass.note.slice(start, e).join(' | ').trim() + ' |\n'
        start = e
      })
      return sopranoStr + altoStr + tenorStr + bassStr
    }
    abcLineBreaker.lineBreak = function(abcNotationStr, breakPositionArr) {
      // Reset regex
      resetRegexExpressions()

      // No wrap information --> return original
      if (breakPositionArr === undefined ||
          breakPositionArr.length == 0)
          return abcNotationStr;

      var {metadata, score} = this.partitionMetaScore(abcNotationStr)
      var {soprano, alto, tenor, bass} = this.partitionNotes(score)

      // Take lyric    
      var lyric = ''
      while ((re1 = rex_lyric.exec(soprano.note)) !== null) { lyric += re1.groups.lyric + ' '} 
      soprano.note = soprano.note.replace(rex_lyric, ''); // remove lyric from soprano/melody
      
      //  lyric
      lyric = lyric.replaceAll(rex_newline,'').split(/\s+/).filter(Boolean)
      //  Parts to array (note: array)
      soprano.note = soprano.note.replaceAll(rex_newline,'').split(/\|/).filter(Boolean)
      alto.note = alto.note.replaceAll(rex_newline,'').split(/\|/).filter(Boolean)
      tenor.note = tenor.note.replaceAll(rex_newline,'').split(/\|/).filter(Boolean)
      bass.note = bass.note.replaceAll(rex_newline,'').split(/\|/).filter(Boolean)
  
      var numBars = soprano.note.length
      if( !((soprano.note.length == alto.note.length) &&
          (soprano.note.length == tenor.note.length) &&
          (soprano.note.length == bass.note.length))) {
            throw 'Part consistency issue'
          }
      
      // Sanity check
      this.checkWrap(numBars, breakPositionArr)
      // handling end
      this.adjustWrap(numBars, breakPositionArr)
      // break
      return metadata + this.break([lyric, soprano,alto,tenor,bass], breakPositionArr)

    }
  }( window.abcLineBreaker = window.abcLineBreaker || {})) // Immediate function