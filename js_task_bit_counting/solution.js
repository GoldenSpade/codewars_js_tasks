const num = 1234;

const countBits = (n) => {
  return n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length;
};

console.log(countBits(num));
