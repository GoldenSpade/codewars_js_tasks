// input data

const num = 25536;

// solution

function specialNumber(number) {
  const arr = number.toString().split('');

  const arrBool = arr.map((elem) => {
    if (
      +elem === 0 ||
      +elem === 1 ||
      +elem === 2 ||
      +elem === 3 ||
      +elem === 4 ||
      +elem === 5
    ) {
      return true;
    } else {
      return false;
    }
  });

  const result = arrBool.every((elem) => elem === true);

  if (result === true) {
    return 'Special!!';
  }

  return 'NOT!!';
}

// control

console.log(specialNumber(num));
