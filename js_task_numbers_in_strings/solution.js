//input data

const str = 'gh12cdy695m1k5kjkj9029';

// solution

function solve(s){
  return Math.max(...s.match(/\d+/g));
};

// control

console.log(solve(str));
