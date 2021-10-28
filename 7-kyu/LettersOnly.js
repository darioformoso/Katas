//Solution
function removeChars(s) {
    let array=s.split("")
    let newArray=[]
    for(i=0;i<array.length;i++){
      if(array[i].toLowerCase() !== array[i].toUpperCase()){
        newArray.push(array[i])
      }else if(array[i]===" "){
        newArray.push(array[i])
      }
    }
   
    return newArray.join("")
  }