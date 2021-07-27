// input data

const arr = [15, 20, 7, 10, 4, 3];
const num = 3;

// solution

function nthSmallest(arr, pos){
  arr.sort((a, b) => a - b);

  return arr[pos - 1]
}

// control

console.log(nthSmallest(arr, num));
