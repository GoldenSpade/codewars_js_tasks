const arr = [1, 2];
const num = 5;

function modifiedSum(a, n) {
  return a.map((elem) => Math.pow(elem, n))
    .reduce((a, b) => a + b) -
    a.reduce((a, b) => a + b);
};

console.log(modifiedSum(arr, num));
