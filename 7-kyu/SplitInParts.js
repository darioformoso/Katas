//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

//Solution
var splitInParts = function(s, partLength){
    let arr=[];
    for (let i=0;i<s.length;i+=partLength){
    arr.push(s.slice(i,i+partLength))
    }
    return arr.join(' ')
  }