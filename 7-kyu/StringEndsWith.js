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