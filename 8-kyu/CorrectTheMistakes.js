


//Solution
function correct(string)
{
	string=string.split("")
  let newString=[]
  
  for(i=0;i<string.length;i++){
    if(string[i]==="5"){
     newString.push("S") 
    }else if(string[i]==="0"){
     newString.push("O") 
    }else if(string[i]==="1"){
     newString.push("I") 
    }else
      newString.push(string[i])
  }
  return newString.join("")
}