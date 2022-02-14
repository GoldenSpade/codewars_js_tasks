const array = [1, 2, 3, 4, 5];

function minMax(arr) {
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  } else {
    return [Math.min(...arr), Math.max(...arr)];
  };
};

console.log(minMax(array));
