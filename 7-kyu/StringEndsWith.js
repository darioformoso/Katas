//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Solution
function solution(str, ending){
    str=str.split("").reverse()
    let checker=ending.split("") 
    let newArray=[] 
     for(i=0;i<checker.length;i++){
       newArray.push(str[i])
     }
     newArray=newArray.reverse().join("")
     
     
     if(newArray===ending){
       return true 
     }else 
       return false
   }