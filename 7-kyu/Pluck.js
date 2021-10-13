//Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.


//Solution
function pluck(objs, name) {
    let arr=[]
    
    for(i=0; i<objs.length;i++){
      arr.push(objs[i][name])
    }
      return arr
    }