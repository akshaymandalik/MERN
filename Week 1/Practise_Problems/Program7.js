/*
Problem Statement: Write a program that reverses all the elements of an Array
Developer: Akshay Mandalik
Last Modified: Sun 1 Sep, 2024 12:54 PM
*/

nArray = [10, 20, 30, 40, 50];
nArray0 = [];
let count1 = 0;

for (let count=(nArray.length-1); count>=0;count--){
    nArray0[count1] = nArray[count];
    count1++;
}

console.log(nArray0);