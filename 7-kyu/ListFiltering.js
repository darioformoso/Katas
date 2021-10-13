//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//Solution
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(Number)
    
    function Number(i){
     return (typeof i=== "number")
    }
  }