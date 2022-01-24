const str = "Hello World!";

function swap(string) {
  return string.replace(/a/gi, 'A')
    .replace(/e/gi, 'E')
    .replace(/i/gi, 'I')
    .replace(/o/gi, 'O')
    .replace(/u/gi, 'U');
};

console.log(swap(str));
