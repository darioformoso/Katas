//You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .



//Solution
function determineTime(durations){
    let hours= [];
    let minutes=[];
    let seconds=[];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    if(durations.length===0){
      return true 
    }else
    
   durations.map(eachTime=>{
    let newArray=eachTime.split(":")
    hours.push(Number(newArray[0]))
    minutes.push(Number(newArray[1]))
    seconds.push(Number(newArray[2]))
    })
  let hoursTotal= hours.reduce(reducer)
  let minutesTotal=minutes.reduce(reducer)
  let secondsTotal=seconds.reduce(reducer)
  
  let hoursSeconds= hoursTotal* 3600;
  let minutesSeconds= minutesTotal*60;
  if(hoursSeconds+ minutesSeconds + secondsTotal<=86400){
    return true
  }
    else 
      return false
    
    }
