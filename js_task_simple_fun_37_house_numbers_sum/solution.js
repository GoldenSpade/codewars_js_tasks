const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];

function houseNumbersSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (array[i] === 0) {
      break;
    }
  }
  return sum;
}

console.log(houseNumbersSum(arr));
