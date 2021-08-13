// input data

const sentence = 'C Is AlIvE!'

// solution

function swapVowelCase(str) {
  const arr = str.split('');

  return arr.map((x) => {
    if (x === x.toLowerCase()) {
      if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
        return x.toUpperCase();
      } else {
        return x;
      }
    }
    if (x === x.toUpperCase()) {
      if (x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
        return x.toLowerCase();
      } else {
        return x;
      }
    }
  }).join('');
}

// control

console.log(swapVowelCase(sentence));
