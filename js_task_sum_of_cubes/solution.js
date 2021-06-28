// input data

const number = 9;

// solution

function sumCubes(n) {
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  return numbers.map((elem) => Math.pow(elem, 3)).reduce((a, b) => a + b);
}

// control

console.log(sumCubes(number));
