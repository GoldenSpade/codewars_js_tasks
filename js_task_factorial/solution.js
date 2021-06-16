// input data

const number = 5;

// solution

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// control

console.log(factorial(number))
