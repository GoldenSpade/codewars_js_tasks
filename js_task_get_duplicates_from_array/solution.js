// input data

const array = [1, 2, 3, 3, 4, 5, 1, 6];

// solution

function getDuplicates(arr) {
  return arr.filter((elem, i) => arr.lastIndexOf(elem) !== i);
}

// control

console.log(getDuplicates(array));
