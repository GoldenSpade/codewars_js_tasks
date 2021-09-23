const string = 'drake';

let removeVowels = function (str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels(string));
