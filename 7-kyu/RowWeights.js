


//Solution
function rowWeights(array){
    let odd=0;
    let even=0;
    let newArray=[]
    
    for(i=0;i<array.length;i++){
      if(i%2===0){
        even+=array[i]
      }else 
        odd+=array[i]
    }
    newArray.push(even)
    newArray.push(odd)
    return newArray
  }