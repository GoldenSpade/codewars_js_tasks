// input data

const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 5, 6];

// solution

function getDifferences(arr1, arr2) {
  const unique1 = arr1.filter((x) => arr2.indexOf(x) === -1);
  const unique2 = arr2.filter((x) => arr1.indexOf(x) === -1);
  
  return unique1.concat(unique2);
}

// control

console.log(getDifferences(array1, array2));
