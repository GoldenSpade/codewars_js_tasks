// input data

const num = 1001;

// solution

function onesComplement(n) {
  return n.toString()
    .split('')
    .map((elem) => {
      if (elem === '1') {
        return 0;
      }
      if (elem === '0') {
        return 1;
      }
    }).join('');
};

// control

console.log(onesComplement(num));
