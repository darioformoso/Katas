//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

//Solution
function spinWords(string){
    //TODO Have fun :)
    let array= string.split(" ")
    for(i=0;i<array.length;i++){
  
      if(array[i].length>=5){
     array[i]= array[i].split("").reverse().join("")
        
      }
      }
    
  
    return array.join(" ")
  }