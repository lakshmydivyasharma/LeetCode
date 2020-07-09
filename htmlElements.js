function HTMLElements(string) {
    let htmlFindStringRegex = /\<.*?\>/g;
    let htmlFindStringArray = string.match(htmlFindStringRegex);
    let openingTags = new Array();
    let closingTags = new Array();
    let temp1 = new String("");
    let temp2 = new String("");
    for(let i=0; i<htmlFindStringArray.length; i++){
        if(htmlFindStringArray[i].startsWith("</")) closingTags.push(htmlFindStringArray[i]);
        else openingTags.push(htmlFindStringArray[i]);
    }
    for(let i=0; i<openingTags.length; i++){
        temp1 = new String("");
        for(let j=0; j<openingTags[i].length; j++)
          if(openingTags[i][j]!=='<' && openingTags[i][j]!=='>')
            temp1 += openingTags[i][j];
        for(let m=0; m<closingTags.length; m++) {
            temp2 = new String("");
            for(let n=0; n<closingTags[m].length; n++)
            if(closingTags[m][n]!=='<' &&closingTags[m][n]!=="/" && closingTags[m][n]!=='>') temp2 += closingTags[m][n];
            if(temp1===temp2) {
                openingTags.splice(i, 1);
                i--;
                closingTags.splice(m, 1);
                break;
            }
        }
    }
    return (openingTags.length === 0 ) ? true : openingTags[openingTags.length-1].slice(1).slice(0, openingTags[0].length-2);
  }

  // KEEP THIS FUNCTION CALL HERE
  console.log(HTMLElements(readline()));
