//solution
function computerToPhone(numbers){
    let newArray=[];
    numbers=numbers.split("")
    
    numbers.map(each=>{
      if(each==="7"){
        newArray.push("1")
      }else if(each==="8"){
        newArray.push("2")
      }else if(each==="9"){
        newArray.push("3")
      }else if(each==="1"){
        newArray.push("7")
      }else if(each==="2"){
        newArray.push("8")
      }else if(each==="3"){
        newArray.push("9")
      }else
        newArray.push(each)
    })
    return newArray.join("")
  }