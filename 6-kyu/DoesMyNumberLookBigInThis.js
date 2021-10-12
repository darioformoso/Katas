//A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).


//Solution
function narcissistic(value) {
    // Code me to return true or false
    let arr=value.toString().split("")
    let sum=0;
    
    for(i=0; i<arr.length; i++){
      let num=Number(arr[i])
      sum+= Math.pow(num,(arr.length))
      
      
      console.log(sum)
    }
    
   
    if(sum==value){
      return true 
    }else
      return false
  }
