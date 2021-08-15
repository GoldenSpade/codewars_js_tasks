// input data

const str1 = "xyaabbbccccdefww";
const str2 = "xxxxyyyyabklmopq";

// solution

function longest(a, b) {
  const array = [...a].concat([...b])
    .sort((a, b) => a.localeCompare(b));

  return array.filter((letter, idx) =>
      array.indexOf(letter) === idx)
    .join('');
}

// control

console.log(longest(str1, str2));
