//Solution
var howManyYears = function(date1, date2){
    date1=date1.split("/")
    date2=date2.split("/")
    let min= Number(date1[0])
    let max= Number(date2[0])
    
   if(min>max){
     return min-max
   }else 
     return max-min
   
  }