//Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.



//Solution
function evenOrOdd(str) {
    let arr= str.split("")
    let odd=0;
    let even=0;
    arr.map(eachArr=>{
      if(Number(eachArr)%2===0){
        even+=Number(eachArr);
      }else
        odd+=Number(eachArr)
    })
      if(odd>even){
        return "Odd is greater than Even"
      }else  if(even>odd){
        return "Even is greater than Odd"
        }else 
          return "Even and Odd are the same"
      
    }