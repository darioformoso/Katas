//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


//Solution
function sumTwoSmallestNumbers(numbers) {  
    //Code here
   let num1=Math.min(...numbers);
  
  
  for(j=0;numbers.length;j++){
    if(num1===numbers[j]){
      numbers.splice(j,1)
      break
    }
  }
  
    let num2= Math.min(...numbers)
    
  
   return num1+num2
  }