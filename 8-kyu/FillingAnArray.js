
//We want an array, but not just any old array, an array with contents!

//Write a function that produces an array with the numbers 0 to N-1 in it.





//Solution 
const arr = N => {

    let array=[];
     for(i=0; i<N; i++){
        array.push(i)
      }
    return array
    };