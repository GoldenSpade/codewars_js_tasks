// input data

const arr = [3, 5, 2, 6, 7, 9, 10];

// solution

function solution(nums) {
  if (nums === [] || nums === null) {
    return [];
  } else {
    return [...nums].sort((a, b) => a - b);
  }
}

// control

console.log(solution(arr));
