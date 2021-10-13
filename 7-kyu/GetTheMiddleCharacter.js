//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//Solution
function getMiddle(s)
{
 let len=(s.length)
 let even=len/2
 
 if(len%2===0){
   return `${s.charAt(even-1)}${s.charAt(even)}`
 }
  else
    return s.charAt(even)
 
  
}