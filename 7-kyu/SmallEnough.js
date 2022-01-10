//Solution
function smallEnough(a, limit){
    let tester=true
    a.map(each=>{
      if(each>limit){
        tester=false
      }
    })
    return tester
    }