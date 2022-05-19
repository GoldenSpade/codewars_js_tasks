const a = [1, 1, 2, 3, 1, 2, 3, 4];
const b = [1, 3];

function remove(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1[i] = null;
      }
    }
  }

  return arr1.filter((x) => x);
}

console.log(remove(a, b));
