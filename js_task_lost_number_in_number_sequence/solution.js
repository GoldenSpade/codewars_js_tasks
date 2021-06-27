// input data

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixArr = [1, 9, 7, 4, 6, 2, 3, 8];

// solution

function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length) return 0;
  for(let k in arr)
    if(mixArr.indexOf(arr[k]) === -1)
      return arr[k];
  return 0;
}

// control

console.log(findDeletedNumber(arr, mixArr));
