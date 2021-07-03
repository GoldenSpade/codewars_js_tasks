// input data

let str = 'Testing String';

// solution

const solution = (string, limit) => {
  if (string.length <= limit) return string
  return string.slice(0, limit) + '...'
}

// control

console.log(solution(str, 5));
