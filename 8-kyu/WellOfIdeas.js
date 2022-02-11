//Solution
function well(x){
    let counter=0;
      x.map(each=>{
        if(each==="good"){
          counter++
        }
      })
      if(counter<=0){
        return "Fail!"
      }else if(counter<=2){
        return "Publish!"
      }else
        return "I smell a series!"
    }