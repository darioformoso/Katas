//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).


//Solution
function solution(number){
    let counter=0;
    if(number<=0){
      return 0;
    }else
    for(i=0; i<number;i++){
      if(i%3===0){
        counter+=i
      }else if(i%5===0){
        counter+=i
      }
    }
    return counter
    }