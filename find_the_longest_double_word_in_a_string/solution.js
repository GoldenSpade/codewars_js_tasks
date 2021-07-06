// input data

const str = 'abc def ghl aaa vvvvv';

// solution

function findRepCharsInWords(str) {
  const words = str.split(' ');

  const arrRev = words.map((x) => {
    let strRev = x.split('').reverse().join('');

    return strRev
  });

  const repLetters = [];

  words.forEach((x, i) => {
    if (x === arrRev[i]) {
      repLetters.push(x);
    }
  });

  if (repLetters.length === 0) {
    return 'There are no words with the same letters. ';
  };

  return repLetters.sort((a, b) => b.length - a.length)[0];
};

// control

console.log(findRepCharsInWords(str));
