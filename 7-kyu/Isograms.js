//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


//Solution
function isIsogram(str){
    str=str.split("")
    let newArray=[]
    
    str.map(each=>{
      if(!newArray.includes(each.toLowerCase())){
        newArray.push(each.toLowerCase())
      }
    })
    if(newArray.length===str.length){
      return true 
    }else 
      return false 
  }