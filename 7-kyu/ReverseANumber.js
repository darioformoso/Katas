
//Reverse a number, if the number is negative it has to stay negative

//Solution
function reverseNumber(n) {
    if(n>0){
   n=n.toString().split("").reverse()
      return parseInt(n.join(""))
   }else 
    n=n*-1
    n=n.toString().split("").reverse()
    
    return parseInt(n.join(""))*-1
  }