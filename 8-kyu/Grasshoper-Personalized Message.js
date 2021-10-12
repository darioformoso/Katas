//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message:
//case	return
//name equals owner	'Hello boss'
//otherwise	'Hello guest'


//Solution 
function greet (name, owner) {
    // Add code here
    let check=0;
    if(name===owner){
      check="Hello boss";
      
    }
    else{
      check="Hello guest"
    }
    return check;
  }