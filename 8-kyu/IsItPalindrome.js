//Write a function that checks if a given string (case insensitive) is a palindrome.


//Solution
function isPalindrome(x) {
    // your code here
    let array= x.split("")
    let back= array.reverse();
    let y= back.join("");
    if(x.toLowerCase() === y.toLowerCase()){
      return true
    }else{
  
    return false
  
  }
    
    }