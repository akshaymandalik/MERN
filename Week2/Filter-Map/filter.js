const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(i) {
  if (i % 2 != 0) {
    return i;
  }
}

let evenNumbers = input.filter(isEven);
console.log("hello World");

console.log(evenNumbers);
