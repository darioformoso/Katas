//Build a function that can get all the integers between two given numbers.



//Solution
function range(startNum, endNum)   
{  
  let array=[]
 for(i=0; i<endNum;i++){
   if(i>startNum && i<endNum){
     array.push(i)
   }
 }
  return array
}; 