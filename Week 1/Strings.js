const myName = "   Akshay Mandalik  ";

// Length of the String
let length = myName.length;
console.log("The Length of the string is " + length);

// Index of any word, character in a string:(0-N)
console.log("The index of Mandalik is " + myName.indexOf("Mandalik"));

// Last Index of any word, character in a string: (0-N)
console.log("The last index of 'a' in string is " + myName.lastIndexOf('a'));

// Geting Substring of a string using start index and end index(Not Included)
console.log(myName.slice(0, 7));

// Same as above but it is deprecrated now!! It gives substring based on start index and length of substring
console.log(myName.substring(0, 6));

// replacing word, character from a string
console.log(myName.replace('A', ' '));

//Spliting the String  into array elements based on delimeter given
console.log(myName.split(" "));

//Removing empty space from beginning and ending of the string
console.log(myName.trim());

//Upper Case the letters
console.log(myName.toUpperCase());

//Lower Case the String
console.log(myName.toLowerCase());



