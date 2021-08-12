// input data

const array = [[3, 2], [1, 2, 1], [7, 8]];

// solution

function smallestProduct(arr) {
  return arr.map((x) =>
    x.reduce((a, b) => a * b))
    .sort((a, b) => a - b)[0];
 }
 
 // control

console.log(smallestProduct(array));
