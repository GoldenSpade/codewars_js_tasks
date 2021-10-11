const str = '0789456123';

function computerToPhone(numbers) {
  return [...numbers].map((x) => {
    if (+x === 0) {
      return 0;
    }

    if (+x === 7) {
      return 1;
    }

    if (+x === 8) {
      return 2;
    }

    if (+x === 9) {
      return 3;
    }

    if (+x === 1) {
      return 7;
    }

    if (+x === 2) {
      return 8;
    }

    if (+x === 3) {
      return 9;
    }

    if (+x === 4) {
      return 4;
    }

    if (+x === 5) {
      return 5;
    }

    if (+x === 6) {
      return 6;
    }
  }).join('');
}

console.log(computerToPhone(str));
