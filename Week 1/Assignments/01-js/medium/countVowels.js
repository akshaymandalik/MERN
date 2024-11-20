/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  if (!str) {
    return 0;
  }

  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (const char of str) {
    
    if (vowels.includes(char)) {
      count = count + 1;
      } 
  }

  return count;

}

// let noOfvowels = countVowels("lfhdkfhsiufhdiufhdiusfghsiudvbsdhv fghsduifbsf dsifdsiufbd fdfbdifgd ffbidsf djf dfgd fdf dafgif df dfgidfbdhsf dsjhf sd fhdiufidfbsidurywiuerhfbcdjksf fiusfidsbfdsbfds                   efefefe             fiushdfiubficuewcbibchisdbclabdsfipuhgewiufghrwuihewuifbdjscbh                           ");
// console.log(noOfvowels);

module.exports = countVowels;