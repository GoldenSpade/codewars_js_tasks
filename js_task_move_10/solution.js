// input data

const s = 'testcase';

// solution

function moveTen(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.toLowerCase().replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}

// control

console.log(moveTen(s));
