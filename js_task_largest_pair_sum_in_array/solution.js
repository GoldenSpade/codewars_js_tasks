// input data

const arr = [1, 2, 3, 4, 6, -1, 2];

// solution

function largestPairSum(arr) {
  const arrOfSums = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];

    if (!isNaN(sum)) {
      arrOfSums.push(sum);
    }
  }

  return Math.max.apply(null, arrOfSums);
}

// control

console.log(largestPairSum(arr));
