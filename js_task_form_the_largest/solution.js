// input data

const num = 7389;

// solution

function maxNumber(number) {
  return +number
    .toString()
    .split('')
    .map((x) => +x)
    .sort((a, b) => b - a)
    .join('')
}

// control

console.log(maxNumber(num));
