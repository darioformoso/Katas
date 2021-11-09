//Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


//Solution
function evenNumbers(array, number) {
    array=array.reverse()
     let newArray=[]
     
     for(i=0;i<array.length;i++){
       if(newArray.length<number){
       if(array[i]%2===0){
         newArray.unshift(array[i])
       }
         }
     }
     return newArray
   }