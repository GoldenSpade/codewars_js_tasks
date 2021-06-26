// input data

const arr = [5, 1, 2, 3, 1, 4];

// solution

function adjacentElementsProduct(array) {
  const arrMults = [];

  arr.forEach((x, i) => {
    let mult = arr[i] * arr[i + 1];

    if (mult >= -Infinity) {
      arrMults.push(mult);
    }
  });

 return Math.max.apply(null, arrMults);
}

// control

console.log(adjacentElementsProduct(arr));
