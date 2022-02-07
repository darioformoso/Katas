//Solution
function digitize(n) {
    let array=String(n)
    let newArray=[]
    array= array.split("").reverse()
      
      array.map(each=>{
        newArray.push(Number(each))
      })
      return newArray
    }