const number = 12345;

function getSumOfDigits(n) {
  if (n === 0) {
    return 0;
  };
  return n.toString().split('').reduce((a, b) => +a + +b)
};

console.log(getSumOfDigits(number));
