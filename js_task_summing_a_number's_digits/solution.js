const num = -99;

function sumDigits(number) {
  return number.toString()
    .split('').map((x) => {
      if (!isNaN(+x)) {
        return +x;
      } else {
        return 0;
      }
    }).reduce((a, b) => a + b);
}

console.log(sumDigits(num));
