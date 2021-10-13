//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//Solution
function capitalize(s){
    let odd=[]
    let even=[]
    s= s.split('')
    for(i=0;i<s.length;i++){
      if(i%2===0){
      even.push(s[i])
        odd.push(s[i].toUpperCase())   
      }else if( i %2 !==0){
         odd.push(s[i])
        even.push(s[i].toUpperCase())  
      }
    }
    odd=odd.join("")
    even=even.join('')
    
   let arr=[]
    arr.push(odd)
   arr.push(even)
    
    return arr
  };