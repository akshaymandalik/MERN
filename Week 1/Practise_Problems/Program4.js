/*
    Problem statement: Write a program which prints all the even numbers in an array
    Date and Time Modified: Sun 18 Aug,2024 08:56 PM
    Developer: Akshay
    Editor: VS Code
*/

const ages = [10, 30, 45, 57, 69, 12, 90];
console.log("The Even Numbers:");

for (let count = 0; count <= ages.length; count++) {
  if (ages[count] % 2 == 0) {
    console.log(ages[count]);
  }
}
