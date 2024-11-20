/*
Problem Statement: Write a program to print the biggest number in an arrays
Developer: Akshay Mandalik
Modification Time: Sat 24 Aug, 2024 09:01 PM

*/

const nArray = [10, 34, 89, 76, 40, 67, 90];
const nArrayLength = nArray.length;
let nMax = 0;
for (let count = 0; count < nArrayLength;count++){
    if (nMax<nArray[count]) {
        nMax = nArray[count];
    }
}

console.log("The Biggest no. from the given array is " + nMax);
