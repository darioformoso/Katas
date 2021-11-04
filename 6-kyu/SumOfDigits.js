//iven n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//Solution 
function digital_root(n) {
    let array=n.toString().split("")
   let result =0;
    array.map(each=>{
      result +=Number(each) 
    })
       let newArray= result.toString().split("")
       let newResult=0;
     if(result<10){
       return result 
     }else 
      newArray.map(each=>{
      newResult +=Number(each) 
    })
     if(newResult<10){
       return newResult 
     }else 
     array=newResult.toString().split("")
     result =0
      array.map(each=>{
      result +=Number(each) 
    })
     return result 
   }