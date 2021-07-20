// input data

const arr = [10, 3, 5, 6, 2, 7];

// solution

function productArray(numbers) {
  return numbers.map(x => numbers.reduce((a, b) => a * b) / x)
}

// control

console.log(productArray(arr));
