// input data

const number = 5;

// solution

function factorial(n) {
  const arrOfNums = [];

  for (let i = 1; i <= n; i++) {
    arrOfNums.push(i);
  }

  let result = 1;

  for (let i = 0; i < arrOfNums.length; i++) { // or we can return arrOfNums.reduce((a, b) => a * b);
    result *= arrOfNums[i];
  }

  return result;
}

// control

console.log(factorial(number))