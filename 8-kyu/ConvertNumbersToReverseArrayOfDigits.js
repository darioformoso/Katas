//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


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