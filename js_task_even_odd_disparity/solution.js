// input data

const arr = [0, 15, 'z', 16, 'm', 13, 14, 'c', 9, 10, 13, 'u', 4, 3];

// solution

function solve(a) {
  let count = 0;
  for (let i = 0; i < a.length; ++i)
    if (typeof a[i] == 'number') {
      if (a[i] % 2 == 0) count++;
      else count--;
    }
  return count;
};

// control

console.log(solve(arr));
