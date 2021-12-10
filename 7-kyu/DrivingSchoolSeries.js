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