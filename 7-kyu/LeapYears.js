//n this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//years divisible by 4 are leap years
//but years divisible by 100 are not leap years
//but years divisible by 400 are leap years

//Solution
function isLeapYear(year) {
    if(year%4===0){
      if(year%400===0){
        return true 
      }else if(year%100===0){
        return false 
      }
      else 
        return true 
    }
     else 
      return false
   }