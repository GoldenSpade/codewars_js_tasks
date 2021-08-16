// input data

const arr = [12, 14, 63, 72, 55, 24];

// solution

function inverseSlice(a, m, n) {
  return a.slice(0, m).concat(a.slice(n));
};

// control

console.log(inverseSlice(arr, 2, 4));

