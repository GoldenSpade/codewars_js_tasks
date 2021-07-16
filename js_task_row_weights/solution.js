// input data

const arr = [70, 58, 75, 34, 91];

// solution

function rowWeights(array) {
  let sumOfEven = 0;
  let sumOfOdd = 0;

  const result = [];

  array.map((elem, i) => {
    if (i % 2 === 0) {
      sumOfEven += elem;
    } else {
      sumOfOdd += (elem);
    }
  });

  result.push(sumOfEven, sumOfOdd);

  return result;
}

// control

console.log(rowWeights(arr));
