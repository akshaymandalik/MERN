/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // const cleanStr = (str) => str.replace(/\s/g, '').toLowerCase();
  // const sortedStr = (str) => cleanStr(str).split('').sort().join('');
  let flag = false;
  if (cleanStr(str1).length != cleanStr(str2).length) {
    flag = false;
  }
  else if (sortedStr(str1) === sortedStr(str2)) {
    flag=  true;
  }

  return flag;

}

function cleanStr(str) {

  return str.replace(/\s/g, '').toLowerCase();
}
function sortedStr(str) {

  return cleanStr(str).split('').sort().join('');
}


module.exports = isAnagram;
