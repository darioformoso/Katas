//You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.


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
    