//Simple, given a string of words, return the length of the shortest word(s).

//Solution
function findShort(s){
    s=s.split(" ");
    let word="aasdasdasdsadad"
    
    for(i=0;i<s.length;i++){
      if(s[i].length<word.length){
        word=s[i]
      }
    }
    return word.length
  }