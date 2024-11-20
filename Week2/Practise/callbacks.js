function calcSquare(n) {
  return n * n;
}

function calcCube(n) {
  return n * n * n;
}

function calculateSomething(a, b, fn) {
  let fn1 = fn(a);
  let fn2 = fn(b);
  return fn1 + fn2;
}

let ans = calculateSomething(1, 2, calcSquare);
console.log(ans);
