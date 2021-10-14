
//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.


//Solution
function scramble(str1, str2) {
    let array1 = str1.split("").sort();
    let array2 = str2.split("").sort();
    let i = 0;
    for(let x = 0; i<array2.length && x<=array1.length; x++) {
        if(array2[i] === array1[x]) {
            i++;
        }
    }
    return (x <= array1.length);
}