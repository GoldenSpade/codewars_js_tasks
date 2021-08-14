// input data

const array = [
  [-11, -6],
  [-20, -20],
  [18, -4],
  [-20, 1]
];

// solution

function solve(arr){
  let max = 1;
  let min = 1;
  for(let i = 0; i<arr.length; i++) {
    let current = [];
    for(let j = 0; j<arr[i].length; j++) {
      current.push(arr[i][j] * max);
      current.push(arr[i][j] * min);
    }
    max = Math.max(...current);
    min = Math.min(...current);
  }
  return max;
}

// control

console.log(solve(array));
