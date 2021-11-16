//Convert an array of strings to an array of numbers 

//Solution 

function toNumberArray(stringarray){
    let array=[]
     stringarray.map(each=>{
      array.push(Number(each))
    })
    return array
  }