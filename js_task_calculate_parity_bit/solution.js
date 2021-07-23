// input data

const parity = 'odd';
const bin = '1010101';

// solution

function checkParity(parity, bin) {
  let amount = 0;

  bin.split('').map((num) => {
    if (+num === 1) {
      amount++;
    }
  });

  if (parity === 'even' && amount % 2 === 0) {
    return 0;
  }
  if (parity === 'even' && amount % 2 !== 0) {
    return 1;
  }
  if (parity === 'odd' && amount % 2 === 0) {
    return 1;
  }
  if (parity === 'odd' && amount % 2 !== 0) {
    return 0;
  }
}

// control

console.log(checkParity(parity, bin));
