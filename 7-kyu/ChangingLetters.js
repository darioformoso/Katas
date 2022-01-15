//When provided with a String, capitalize all vowels


//Solution
function swap (string) {
    string=string.split("")
    let array=[]
    
    string.map(each=>{
      if(each==="a"||each==="e"||each==="i"||each==="o"||each==="u" ){
        array.push(each.toUpperCase())
      }else
        array.push(each)
    })
    return array.join("")
  }