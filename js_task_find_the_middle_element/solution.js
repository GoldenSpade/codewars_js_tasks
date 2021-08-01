// input data

const arr = [5, 10, 14];

// solution

const gimme = function (inputArray) {
  const sorted = [...inputArray].sort((a, b) => a - b);

  return inputArray.indexOf(sorted[1]);
};

// control

console.log(result);
