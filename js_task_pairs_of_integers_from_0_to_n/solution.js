// input data

const num = 2;

// solution

function generatePairs(n) {
  const arr = []
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      arr.push([i, j]);
    }
  }
  return arr;
}

// control

console.log(generatePairs(num));
