const array = [1, 20, 2, 4, 7, 19];

function inAscOrder(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let res = false;

  res = arr.every((elem, idx) => elem === sorted[idx]);

  return res;
}

console.log(inAscOrder(array));

