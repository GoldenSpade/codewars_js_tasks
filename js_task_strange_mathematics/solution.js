// input data

const a = 15;
const b = 15;

// solution

function strangeMath(n, k) {
  const arr = [0];

  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  return arr.sort().indexOf(k)
}

// control

console.log(strangeMath(a, b));