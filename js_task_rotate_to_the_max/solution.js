// input data

const num = 126345;

// solution

function rotateToMax(n) {
  return +n.toString().split('').sort((a, b) => +b - +a).join('');
};

// control

console.log(rotateToMax(num));
