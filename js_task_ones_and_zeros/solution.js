//input data

const array = [1, 1, 1, 1];

// solution

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};

// control

console.log(binaryArrayToNumber(array));
