//input data

const str = 'abcde';
const find = 'de';

// solution

function solution(str, ending) {
  return str.endsWith(ending);
}

// control

console.log(solution(str, find));
