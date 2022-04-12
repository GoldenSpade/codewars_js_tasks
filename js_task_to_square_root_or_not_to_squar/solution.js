const arr = [4, 3, 9, 7, 2, 1];

function squareOrSquareRoot(array) {
  const res = [...array].map((x) => {
    let isInt = Number.isInteger(Math.sqrt(x));
    if (isInt) return Math.sqrt(x);
    return Math.pow(x, 2);
  });
  return res;
}

console.log(squareOrSquareRoot(arr));
