/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if (!str || str.length === 1) 
    return true;
  
  if (str.trim().length === 0)
    return true;

  str = str.toLowerCase().replace(/[^\w\s]|_/g,'').replaceAll(" ", "");
  
  newStr = str.split('').reverse().join('');

  return str === newStr;
}



module.exports = isPalindrome;
