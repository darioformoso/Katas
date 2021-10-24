//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

//Solution
function rentalCarCost(d) {
    let price=d*40;
     
     if(d>=7){
       price=price-50;
       
     }
     else if(d>=3 && d<7){
       price=price-20;
     }
     return price
   }