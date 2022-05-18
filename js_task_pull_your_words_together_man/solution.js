const array = ["i", "am", "an", "AI"];

function sentencify(words) {
  let res = '';
  let firstWord =
    words[0][0].toUpperCase() + words[0].substr(1, words[0].length - 1);

    if (words.length <= 1) {
      res = firstWord + '.';
    } else {
    words.shift();
    res = firstWord + ' ' + words.join(' ') + '.';
  }
  
  return res;
}

console.log(sentencify(array));
