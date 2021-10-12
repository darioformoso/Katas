//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char


//Solution
function XO(str) {
    //code here
  let arr=str.split("").sort();
  let x=0;
  let o=0;
  for(i=0;i<arr.length;i++){
    
    if(arr[i].toLowerCase()==="x"){
      x++
    }else if(arr[i].toLowerCase()==="o"){
      o++
    }
    
  }
  if(x!==o){
    return false
  }
  else 
    return true
  
}