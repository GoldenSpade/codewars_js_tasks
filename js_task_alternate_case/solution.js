// input data

const str = 'hELLO wORLD';

// solution

function alternateCase(s) {
  let arr = s.split('');

  return arr.map((x) => {
    if (x === x.toUpperCase()) {
      return x.toLowerCase();
    }
    if (x === x.toLowerCase()) {
      return x.toUpperCase();
    }
  }).join('');
}

// control

console.log(alternateCase(str));
