//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.




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