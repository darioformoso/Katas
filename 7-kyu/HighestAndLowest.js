//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


//Solution
function highAndLow(numbers){
    // ...
    let array= numbers.split(" ").map(Number);
    let arr= numbers.split(" ").map(Number);
    
  
     let max=-9000;
    let min=8000;
    for(i=0;i<array.length;i++){
      if(max<array[i]){
        max=array[i]
      }
    }
    for(j=0; j<array.length;j++){
       if(min>array[j]){
        min=array[j]
      }
    }
    
    return max + " " + min
  }