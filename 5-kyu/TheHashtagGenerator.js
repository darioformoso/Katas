//The marketing team is spending way too much time typing in hashtags.
//Let's help them with our own Hashtag Generator!




//Solution
function generateHashtag (str) {
    let newArray= str.split(" ")
    let array=[]
    
    
    newArray.map(each=>{
      array.push(each.charAt(0).toUpperCase() + each.slice(1));
     
    })
    array=array.join("")
   
    
  if(!str.includes("a")){
    return false
  }else if(array.length>=140){
    return false
  }
    else 
    
    return `#${array}` 
    
  }