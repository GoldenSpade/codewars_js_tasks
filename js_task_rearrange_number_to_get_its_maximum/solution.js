// input data

const number = 100;

// solution

function maxRedigit (num) {
  if(num < 100 || num > 999)
    return null
  return +num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
};

// control

console.log(maxRedigit(number));
