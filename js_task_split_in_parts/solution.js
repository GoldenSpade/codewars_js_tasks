const str = 'HelloKata';

let splitInParts = function (s, partLength) {
  let a = 0;
  let b = partLength;

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    let word = s.substring(a, b)

    a += partLength;
    b += partLength;

    arr.push(word);
  }

  return arr.filter((x) => x.length !== 0).join(' ');
}

console.log(splitInParts(str, 3));
