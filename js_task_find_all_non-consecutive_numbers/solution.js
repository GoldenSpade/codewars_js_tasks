const arr = [1, 2, 3, 4, 6, 7, 8, 10];

function allNonConsecutive (array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] > 1) {
      result.push({
        i: i + 1,
        n: array[i + 1]
      })
    }
  };
  return result;
}

console.log(allNonConsecutive(arr));
