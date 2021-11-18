


//Solution
function isIsogram(str){
    str=str.split("")
    let newArray=[]
    
    str.map(each=>{
      if(!newArray.includes(each.toLowerCase())){
        newArray.push(each.toLowerCase())
      }
    })
    if(newArray.length===str.length){
      return true 
    }else 
      return false 
  }