//if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.




//Solution
function cost (mins) { 
    let check=0;
    let final=0;
    
    if(mins<=65){
      return 30
    }else 
      mins =mins-65;
    check = Math.ceil(mins/30)
    final= 30+ (check*10)
    console.log(check)
    console.log(mins)
    return final
    
    }