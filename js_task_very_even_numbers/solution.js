const number = 121;

function isVeryEvenNumber(n) {
  let sumOfNums = n.toString()
    .split('').map((x) => +x)
    .reduce((a, b) => a + b);

    let nLength = sumOfNums.toString().length;

    for (let i = 0; i <= n; i++) {
      if (nLength < 1) {
        n = sumOfNums;
      } else {
        n = n.toString()
        .split('').map((x) => +x)
        .reduce((a, b) => a + b)
      };
    };

  return n % 2 === 0;
};

console.log(isVeryEvenNumber(number));
