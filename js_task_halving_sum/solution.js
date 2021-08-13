// input data

let num = 127;

// solution

function halvingSum(n) {
  let i = 0;
  let sum = 0;
  while ( n  >= 1) {
    sum += n;
    n = Math.trunc(n / 2);
  }
  return sum;
}

// control

console.log(halvingSum(num));
