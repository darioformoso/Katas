//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.


//Solution
function printerError(s) {
    // your code
  let arr=s.split("")
  let alp=["a","b","c","d","e","f","g","h","i","j","k","l","m"]
  let counter=0;
  for(i=0;i<arr.length;i++){
    if(!alp.includes(arr[i])){
      counter++
    }
  }
  return `${counter}/${arr.length}`
}