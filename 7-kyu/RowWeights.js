//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.




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