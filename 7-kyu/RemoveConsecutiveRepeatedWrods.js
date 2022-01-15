//our task is to remove all consecutive duplicate words from a string, leaving only first words entries

//Solution
function removeConsecutiveDuplicates(s){
    s=s.split(" ")
    let newArray=[]
    
  for(i=0;i<s.length;i++){
    if(newArray[0]!==s[i]){
      newArray.unshift(s[i])
    }
    }
  
    return newArray.reverse().join(" ")
  } 