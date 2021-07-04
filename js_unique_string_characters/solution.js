// input data

const str1 = 'xyab';
const str2 = 'xzca';

// solution

function solve(a, b) {
  const unique1 = a.split('').filter((x) => b.indexOf(x) === -1);
  const unique2 = b.split('').filter((x) => a.indexOf(x) === -1);
  
  return unique1.concat(unique2).join('');
};

// control

console.log(solve(str1, str2));
