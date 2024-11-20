let iNumbers = [10, 20, 30];

iNumbers.push(12);  // Adds element to the last of the array

console.log(iNumbers);

iNumbers.pop(); // Removes element from the last of the array

console.log(iNumbers);

iNumbers.shift(); // Removes element from the beginning of the array
console.log(iNumbers);

iNumbers.unshift(34); // Add element to the beginning of the array
console.log(iNumbers);

let FNames = ["Akshay", "Shubham"];

let newArray = iNumbers.concat(FNames);

console.log(newArray);

let sum = 0;

function printNumber(iNum) {

    sum = sum + iNum;
}

iNumbers.forEach(printNumber);
console.log(sum);


