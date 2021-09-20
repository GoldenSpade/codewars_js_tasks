const nums = [10, 8, 7, 9];
const count = 3;

function maxProduct(numbers, size) {
  let result = 1;

  const numsSort = [...numbers].sort((a, b) => b - a);

  for (let i = 0; i < size; i++) {
    result *= numsSort[i];
  };

  return result;
};

console.log(maxProduct(nums, count));