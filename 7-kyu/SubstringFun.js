//


//Solution

function nthChar(words){

    let newWord=[]
    let n=0;
  
    for(i=0;i<words.length;i++){
     newWord.push(words[i][n])
      n++
    }
  return newWord.join("")
    
}
    