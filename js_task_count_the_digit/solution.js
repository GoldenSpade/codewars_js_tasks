// input data

const a = 25;
const b = 1;

// solution

function nbDig(n, d) {
  const numbers = [];

  for (let i = 0; i <= n; i++) {
    numbers.push(Math.pow(i, 2));
  };

  return numbers.join('')
    .split('')
    .filter((x) => x.includes(String(d))).length;
}

// control

console.log(nbDig(a, b));
