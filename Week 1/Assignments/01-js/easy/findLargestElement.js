/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if (!numbers) {
        return undefined;
    }
    
    let largestElement = numbers[0];
    for (let iCnt = 1; iCnt <= numbers.length;iCnt++){
        if (largestElement < numbers[iCnt]) {
            largestElement = numbers[iCnt];
        }
    }
    return largestElement;
}



module.exports = findLargestElement;