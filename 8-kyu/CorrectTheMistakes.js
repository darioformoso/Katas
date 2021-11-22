//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

//When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:


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