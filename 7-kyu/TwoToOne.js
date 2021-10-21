//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.




//Solution
function longest(s1, s2) {
    s1.split("")
     s2.split("")
     
     let newArray=[]
     
     for(i=0;i<s1.length;i++){
       if(!newArray.includes(s1[i])){
         newArray.push(s1[i])
       }
     }
      for(i=0;i<s2.length;i++){
       if(!newArray.includes(s2[i])){
         newArray.push(s2[i])
       }
     }
     return newArray.sort().join("")
   }