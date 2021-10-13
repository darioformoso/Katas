//In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

//Solution
function repeats(arr){
    arr=arr.sort()
      let newArr=[]
    for(i=0;i<arr.length;i++){
      if(arr[i]===arr[i+1]){
        i++
      }
    else
      newArr.push(arr[i])
      
       
    }
      
      return newArr[0]+newArr[1]
    };