//Create a function called shortcut to remove all the lowercase vowels in a given string.

//Solution
function shortcut(string){
    string=string.split("")
   let arr=[];
  
   for(i=0;i<string.length;i++){
     
     if(string[i]==="a"){
       continue
     }else if(string[i]==="e"){
       continue
     }else if(string[i]==="i"){
       continue
     }else if(string[i]==="o"){
       continue
     }else if(string[i]==="u"){
       continue
     }
    else
      
       arr.push(string[i])
 
    } 
   arr=arr.join("")
   return arr
   
 }