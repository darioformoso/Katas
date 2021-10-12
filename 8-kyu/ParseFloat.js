//Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.


//Solution
function parseF(s) {
    var pointNum = parseFloat(s);
     if (isNaN(pointNum)) {
      return null;
      }else{
      return pointNum;
    }
    
  }
