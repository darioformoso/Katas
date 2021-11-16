//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


//Solution
var summation = function (num) {
    let count=0;
    for(i=0;i<(num+1);i++){
      count+=i
    }
    return count 
  }