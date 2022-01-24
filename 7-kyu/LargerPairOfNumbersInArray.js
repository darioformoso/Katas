//Given a sequence of numbers, find the largest pair sum in the sequence.





//Solution
function largestPairSum (numbers) {

    function compareNumbers(a, b) {
      return b-a;
    }
      
      numbers=numbers.sort(compareNumbers)
      
      return (numbers[0]+ numbers[1])
    }