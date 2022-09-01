const a = 1;
const b = 4;

function binaryPyramid(m, n) {
  const nums = [];

  for (let i = m; i <= n; i++) {
    nums.push(+i.toString(2));
  }

  const sum = nums.reduce((a, b) => a + b);

  return sum.toString(2);
}

console.log(binaryPyramid(a, b));