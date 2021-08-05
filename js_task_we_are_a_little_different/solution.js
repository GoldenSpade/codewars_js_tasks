// input data

const array = [42, 45, 1, 78, 92, 10];

// solution

function getDifference(arr) {
  const min = [...arr].sort((a, b) => a - b)[0];
  const max = [...arr].sort((a, b) => b - a)[0];
  
  return max - min;
}

// control

console.log(getDifference(array));
