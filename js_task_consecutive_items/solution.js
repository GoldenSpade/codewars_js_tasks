// input data

const array = [1, 3, 5, 7];
const x = 3;
const y = 1;

// solution

function consecutive(arr, a, b) {
  const result = arr.indexOf(a) - arr.indexOf(b);

  if (result === 1 || result === -1) {
    return true;
  } else {
    return false;
  }
}

// control

console.log(consecutive(array, x, y));