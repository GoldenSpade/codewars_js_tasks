// input data

const array = [1, 1, 1, 2, 1, 1];

// solution

function findUniq(arr) {
  return arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))[0];
}

// control

console.log(findUniq(array));
