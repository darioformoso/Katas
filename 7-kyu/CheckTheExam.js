//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.




//Solution
function checkExam(array1, array2) {
    
     let counter=0
     for(i=0;i<array1.length;i++){
       console.log(array1)
       console.log(array2)
       if(array1[i]===array2[i]){
         counter+=4
         }
       else if(array1[i]!==array2[i]&& array2[i]!==""){
         counter -=1
       }
     else if(array2[i]===''){
       counter += 0
     }
       
     
   }
     if(counter<0){
       counter=0;
     }
     return counter
     }