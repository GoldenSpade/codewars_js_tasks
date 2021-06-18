// input data

const x = '10000000101101111110011001000';

// solution

function broken(x) {
  return x.split('').map((elem) => {
    if (+elem === 1) {
      return 0;
    }
    if (+elem === 0) {
      return 1;
    }
  }).join('');
}

// control

console.log(broken(x));
