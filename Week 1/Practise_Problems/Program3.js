/*
Problem Statement: Write a program that counts from 0 to 1000 and  prints
Date and Time Modified: Sun 18 Aug, 2024 08:29PM
Developer: Akshay Mandalik
*/

let sum = 0;

for (let count = 0; count <= 1000; count++){
    
    sum = sum + count;
    console.log(count);
}

console.log("The addition of all these numbers is "+sum);