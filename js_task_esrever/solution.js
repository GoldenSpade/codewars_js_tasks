const arr = [1, 2, 3, 4, 5];

reverse = function (array) {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

console.log(reverse(arr));
