//Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.



//Solution
function isCoprime(x, y) {
    let newArray=[]
    let checker=0;
    if(x>y){
       checker=x
    }else 
       checker=y
    for( i=1;i<checker;i++){
      if(x%i===0 && y%i===0){
        newArray.push(i)
      }
    }
    console.log(y)
    console.log(newArray)
    if(newArray.length===1){
      if(newArray.includes(1)){
      return true 
        }
    }else 
      return false 
  }