const num = 144;

let isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(num));
