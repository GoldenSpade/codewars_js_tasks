const array = [1, 4, 16, 81];

function is_square(arr) {
  if (arr.length == 0) {
    return undefined;
  }

  return arr.map((x) => Math.sqrt(x)).
  every((y) => Number.isInteger(y));
}

console.log(is_square(array));
