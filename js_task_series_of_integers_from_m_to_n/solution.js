const a = 2;
const b = 5;

function generateIntegers(m, n) {
  const result = [];

  for (let i = m; i <= n; i++) {
    result.push(i);
  };

  return result;
};

console.log(generateIntegers(a, b));
