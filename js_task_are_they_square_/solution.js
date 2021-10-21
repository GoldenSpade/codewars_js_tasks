const array = [1, 4, 9, 16];

var isSquare = function (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.every((x) => Number.isInteger(Math.sqrt(x)));
}

console.log(isSquare(array));
