// input data

const s = 'ZpglnRxqenU';

// solution

function accum(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i].toLowerCase().repeat(i + 1))
  }

  return arr.map((char) =>
    char[0].toUpperCase() +
    char.substr(1)).join('-');
}

// control

console.log(accum(s));
