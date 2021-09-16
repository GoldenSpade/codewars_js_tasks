const str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  let result = '';

  result = this.split(' ')
    .map((word) =>
      word.slice(0, 1)
      .toUpperCase() +
      word.slice(1)
    ).join(' ');

  return result;
};

console.log(asd.toJadenCase());
