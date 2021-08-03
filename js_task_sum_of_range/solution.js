// input data

const x = 1;
const y = 500;

// solution

function getSumOfRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// control

console.log(getSumOfRange(x, y));
