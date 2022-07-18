const a = 1;
const b = 100;

function sumDigPow(start, end) {
  const allNums = [];

  for (let i = start; i <= end; i++) {
    allNums.push(i);
  }

  const consecNums = [];

  allNums.forEach((num) => {
    if (num < 10) {
      consecNums.push(num);
    }
  });

  allNums.forEach((num) => {
    let strNumArr = String(num)
      .split("")
      .map((x) => +x);

    if (num >= 10) {
      let sum = strNumArr
        .map((x, i) => Math.pow(x, i + 1))
        .reduce((a, b) => a + b);

      if (num === sum) {
        consecNums.push(sum);
      }
    }
  });

  return consecNums;
};

console.log(sumDigPow(a, b));
