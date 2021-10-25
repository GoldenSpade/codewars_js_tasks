const str = 'Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country';

function compress(sentence) {
  let repeatedWords = [];
  return sentence
    .split(/[ ]+/gi)
    .map((word) => word.toLowerCase())
    .reduce((acc, curr, i, arr) => {
      if (!repeatedWords.includes(curr)) {
        repeatedWords.push(curr);
      }
      acc += repeatedWords.indexOf(curr);
      return acc;
    }, "");
}

console.log(compress(str));
