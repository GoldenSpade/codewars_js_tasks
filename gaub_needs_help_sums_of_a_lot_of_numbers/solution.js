const num = 10;

function f(n) {
  if (isNaN(n) || !n || !Number.isInteger(n) || n <= 0) {
    return false;
  };

  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
};

console.log(f(num));
