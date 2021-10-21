//You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?


//Solution 
function missingNo(nums) {
    nums.sort(function(a, b) {
     return a - b;
     })
            for(i=0;i<nums.length;i++)
              if(nums[i]!==i){
                return i
              }else if(!nums.includes(100)){
                return 100
              }
   }