// input data

const arr = [4, 5, 7, 8, 1, 2, 3, 0];

// solution

const sumSquareEvenRootOdd = arr => {
  const arrNew = arr.map((num) => {
  if (num % 2 === 0) {
    return Math.pow(num, 2);
  } else {
    return Math.sqrt(num);
  }
});

  return +arrNew.reduce((a, b) => a + b).toFixed(2);
};

// control

console.log(sumSquareEvenRootOdd(arr));
