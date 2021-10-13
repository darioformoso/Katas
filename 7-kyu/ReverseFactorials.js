//Your challenge is to create a function that takes any number and returns the number that it is a factorial of. So, if your function receives 120, it should return "5!" (as a string).

//Solution
function reverseFactorial(num) {

    let result=1
    let calc=1
    while(result<=num){
      if(result===num){
        return `${calc}!`
      }
      calc++
      result = result *calc
    }
      return 'None'
    }