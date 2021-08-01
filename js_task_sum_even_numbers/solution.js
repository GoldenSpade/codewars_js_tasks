// input data

const arr = [4, 3, 1, 2, 5, 10, 6, 7, 9, 8];

// solution

const result = arr.filter((x) => x % 2 === 0)
  .reduce((a, b) => a + b);

// control

console.log(result);
