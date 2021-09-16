const arr = [1, 1, 5, 6, 9, 16, 27];
const number = 4;

const intDiff = (arr, n) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (Math.abs(arr[i] - arr[j]) === n) count++;

  return count;
};

console.log(intDiff(arr, number));
