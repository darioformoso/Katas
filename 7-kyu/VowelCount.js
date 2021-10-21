//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.




//Solution
function getCount(str) {
    var vowelsCount = 0;
    
  let newArray=str.split("")
    newArray.map(each=>{
      if(each==="a"||each==="e"||each==="i"||each==="o"||each==="u"){
        vowelsCount++
      }
    })
    
    return vowelsCount;
  }