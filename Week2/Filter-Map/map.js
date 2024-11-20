// Given an array, give me back a new array in which every value is multiplied by 2

input = [1, 2, 3, 4, 5];

function solution(i) {
  return i * 2;
}

let newArray = input.map(solution);
console.log(newArray);
