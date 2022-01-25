//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

//Solution
function sumOfMinimums(arr) {
    let result =0;
    let checker=10000;
    for(i=0;i<arr.length;i++){
      for(n=0;n<arr[i].length;n++){
        if(arr[i][n]<checker){
           checker= arr[i][n]
        }
        
      }
      result+=checker
      checker=10000
    }
    return result
  }