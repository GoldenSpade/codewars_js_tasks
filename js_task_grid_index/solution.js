// input data

const grid = [
  ['m', 'y', 'e'],
  ['x', 'a', 'm'],
  ['p', 'l', 'e']
];
const nums = [1, 3, 5, 8];

// solution

const gridIndex = (grid, indices) => {
  const flatList = grid.flat(2)
  return indices.map(indice => flatList[indice -1]).join('')
}

// control

console.log(gridIndex(grid, nums));
