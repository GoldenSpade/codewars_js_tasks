// input data

const str = 'The quick brown fox jumps over the lazy dog';

// solution

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter((word) => word.length > n)
}

// control

console.log(filterLongWords(str, 4));
