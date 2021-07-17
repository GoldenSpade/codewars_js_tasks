// input data

const str = 'xoxotrololololololoxxx';

// solution

const tripleX = (str) =>
  str.indexOf('x') ===
  str.indexOf('xxx') &&
  str.includes('x');

// control

console.log(tripleX(str));
