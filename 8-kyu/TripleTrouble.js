//Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other

//Solution
function tripleTrouble(one, two, three){
    //Solution
    let string="";
   for(i=0; i<one.length;i++){
   string+=one[i]+two[i]+three[i] 
   }
    return string 
    }