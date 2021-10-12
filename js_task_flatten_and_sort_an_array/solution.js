const array = [
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
  []
];


const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b)

console.log(flattenAndSort(array));
