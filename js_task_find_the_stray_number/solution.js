// input data

const arr = [1, 1, 2, 1, 1, 1, 1];

// solution

function stray(arr) {
  let result = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      result = arr[i];
    }
  }
  return result;
}

// control

console.log(stray(arr));
