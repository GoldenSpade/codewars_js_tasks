const string = 'a';

String.prototype.vowel = function () {
  const checkStr = 'aeiou';

  if (this.length === 0 || this.length > 1) {
    return false;
  } else {
    return checkStr.includes(this.toLowerCase());
  }
};

console.log(string.vowel());
