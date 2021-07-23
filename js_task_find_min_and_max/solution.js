// input data

const arr = [2, 3, 6, 5, 4, 9];

// solution

function getMinMax(arr) {
  arr.sort((a, b) => a - b);

  return [arr[0], arr[arr.length - 1]];
};

// control

console.log(getMinMax(arr));
