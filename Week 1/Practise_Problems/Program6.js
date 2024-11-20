/*
Problem Statement: Write a program that prints all the male peoples first name given a complex object
Developer: Akshay Mandalik
Last Modified: Sat 24 Aug, 2024 09:08PM
*/

const Person = [
  {
    firstName: "Akshay",
    lastName: "Mandalik",
    gender: "M",
  },
  {
    firstName: "Victoria",
    lastName: "Aleczander",
    gender: "F",
  },
];

for (let count = 0; count < Person.length;count++){
    if (Person[count].gender =="F") {
        console.log(Person[count].firstName);
    }
}


 