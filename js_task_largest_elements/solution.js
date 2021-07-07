// input data

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const n = 2;

// solution

let largest = (n, xs) =>
  xs
    .sort((a, b) => b - a)
    .filter((e, i) => i < n)
    .reverse();

// control

console.log(largest(n, arr));
