// input data

const num = 5;

// solution

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('The parameter must be between 0 and 12.');
  }
  
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  
  return factorial;
}

// control

console.log(factorial(num));
