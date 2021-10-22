//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)

//You can find some examples in the test fixtures.


//Solution
function humanReadable(seconds) {
    let minutes= Math.floor(seconds/60);
    let hours= Math.floor(minutes/60);
    let secFin=seconds-(minutes*60);
    let minFin=minutes-(hours*60);
   
  
    return `${(hours/100).toFixed(2).toString().slice(2)}:${(minFin/100).toFixed(2).toString().slice(2)}:${(secFin/100).toFixed(2).toString().slice(2)}`
   
  }