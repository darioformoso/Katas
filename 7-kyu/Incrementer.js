//Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 (and not 0).


//Solution
function incrementer(nums) { 
    let newArray=[]
    let n=1;
    let newNum=0;
    let checker=""
    if(nums.length===0){
      return newArray;
    }else 
   for(i=0;i<nums.length;i++){
      newNum=nums[i]+n
     if(newNum>=10){
      checker= newNum.toString()[1]
       newArray.push(Number(checker))
     }else
     newArray.push(newNum)
     n++
   }
   
   return newArray
  }