// input data

const num = 15;

// solution

function pyramid(balls) {
  return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
};

// control

console.log(pyramid(num));
