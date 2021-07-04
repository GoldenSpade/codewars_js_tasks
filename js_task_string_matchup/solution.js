// input data

const array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw'];
const array2 = ['abc', 'cde', 'uap'];

// solution

function solve(a,b){
  result = [];
  for(let item of b){
    result.push(a.filter(i => i === item).length);
  }
  return [...result];
}

// control

console.log(solve(array1, array2));
