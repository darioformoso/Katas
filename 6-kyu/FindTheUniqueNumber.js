//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//Solution
function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
    }