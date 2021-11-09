//You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.


//Solution 
function spongeMeme(sentence) {
    sentence=sentence.toLowerCase().split('')
    let array=[]
    for(i=0;i<sentence.length;i++){
      if(i%2===0){
        array.push(sentence[i].toUpperCase())
      }else 
        array.push(sentence[i])
    
  }
    return array.join("")
    }