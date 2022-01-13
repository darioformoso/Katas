//Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.


//SOlution
function getAge(inputString){
    inputString=inputString.split(" ")
      return Number(inputString[0])
    }