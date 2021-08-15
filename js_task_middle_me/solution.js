// input data

const c = 10;
const a = 'A';
const b = '*';

// solution

function middleMe(n, x, y) {
  let result = '';
  
  if (n % 2 !== 0) {
   return x;
  };
  
  for (let i = 1; i <= n / 2; i++) {
    result += y;
  };
  
  result += x;
  
  for (let i = 1; i <= n / 2; i++) {
    result += y;
  };
  return result;
};

// control

console.log(middleMe(c, a, b));
