//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.


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