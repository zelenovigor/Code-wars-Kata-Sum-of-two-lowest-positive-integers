function sumTwoSmallestNumbers(numbers) {  
    let sum = 0;
     let newArray = []
     for ( var i = 0; i < numbers.length; i++) {
       let elem = numbers[i]
       if ( elem >= 0) {   
         newArray.push(elem)
         newArray.sort(function(a, b) {
    return a - b;
  });
       }
       sum = newArray[0] + newArray[1]
     }
  return sum
    }