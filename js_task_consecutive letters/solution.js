// input data

const str = 'abcdef';

// solution

function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet.includes(s.split('').sort().join(''));
}

// control

console.log(solve(str));
