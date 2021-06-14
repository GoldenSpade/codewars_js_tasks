// input data

const array1 = [1, 2];
const array2 = [4, 5, 5];

// solution

function addArrays(array1, array2) {
  if (array1.length === array2.length) {
    return array1.map((x, i) => x + array2[i])
  } else {
    throw new Error('Error');
  }
}
