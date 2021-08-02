const array = [3, 4, 4, 3, 6, 3];

function solve(arr){
  return arr.filter((elem, i) => arr.lastIndexOf(elem) === i);
}

console.log(solve(array));
