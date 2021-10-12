
//Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.


//Solution
function roundIt(n){
 
    let [left,right]=String(n).split('.')
    
    if(left.length < right.length){
      return Math.ceil(n)
    }else if(left.length > right.length){
      
    return Math.floor(n)
    }else if(left.length == right.length){
      return Math.round(n)
    }
      
    }