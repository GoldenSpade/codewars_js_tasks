const arr = [0, 1, 2, 2, 3];
const number = 2;

Array.prototype.numberOfOccurrences = function(num) {
  let count = 0;

  this.forEach((x) => x === num ? count++ : undefined)

  return count;
}

console.log(arr.numberOfOccurrences(number));
