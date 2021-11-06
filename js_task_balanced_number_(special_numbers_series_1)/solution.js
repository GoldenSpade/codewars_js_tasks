const num = 1234123;

function balancedNum(number) {
  const strNum = number.toString();

  let sumLeft = 0;
  let sumRight = 0;

  if (strNum.length % 2 !== 0) {
    for (let i = 0; i < Math.floor(strNum.length / 2); i++) {
      sumLeft += +strNum[i];
    };

    for (let i = Math.ceil(strNum.length / 2); i < strNum.length; i++) {
      sumRight += +strNum[i]
    }
  } else {
    for (let i = 0; i < (strNum.length / 2 - 1); i++) {
      sumLeft += +strNum[i];
    };

    for (let i = (strNum.length / 2 + 1); i < strNum.length; i++) {
      sumRight += +strNum[i];
    };
  };

  if (sumLeft === sumRight) {
    return 'Balanced';
  }

  return 'Not Balanced';
}

console.log(balancedNum(num));
