//Complete the solution so that it reverses all of the words within the string passed in.

//Solution 
function reverseWords(str){
    str=str.split(" ")
     let arr=[]
     
     for(i=0;i<str.length;i++){
       arr.unshift(str[i])
     }
     return arr.join(" ")
   }