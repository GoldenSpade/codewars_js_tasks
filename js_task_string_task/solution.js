// input data

const str = 'Codewars';

// solution

function stringTask(s) {
  return s.toLowerCase()
    .replace(/[aeouiy]/gi, '')
    .split('')
    .map((x) => '.' + x)
    .join('')
};

// control

console.log(stringTask(str));
