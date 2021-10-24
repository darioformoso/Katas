//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//Solution
function createPhoneNumber(numbers){
    let string="("
    for(i=0;i<numbers.length;i++){
      string+=numbers[i]
      if(i===2){
        string+=") "
      }
      if(i===5){
        string+="-"
      }
    }
    return string
  }