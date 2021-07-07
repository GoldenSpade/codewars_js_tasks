// input data

const arr = [1, 2, 3, -4, -5];

// solution

function mathEngine(arr) {
  return (arr) ?
    arr.filter(x => x >= 0).reduce((a, b) => a * b, 1) +
    arr.filter(x => x < 0).reduce((a, b) => a + b, 0) :
    0;
};

// control

console.log(mathEngine(arr));
