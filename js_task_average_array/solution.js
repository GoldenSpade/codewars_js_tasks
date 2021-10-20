const arrays = [
  [2, 3, 9, 10, 7],
  [12, 6, 89, 45, 3],
  [9, 12, 56, 10, 34],
  [67, 23, 1, 88, 34]
];

function avgArray(arr) {
  let result = [];
  for (let i in arr[0]) {
    let num = 0;
    for (let j in arr) {
      num += arr[j][i];
    }
    result.push(num / arr.length);
  }
  return result;
}

console.log(avgArray(arrays));
