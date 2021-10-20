const array = [1, 2, 3, 4];

function cubeOdd(arr) {
  let sum = 0;

  if (arr.some((x) => isNaN(x))) {
    return undefined;
  } else {
    arr.forEach((x) => {
      if (x % 2 !== 0) {
        sum += Math.pow(x, 3);
      };
    });
  };
  return sum;
};

console.log(cubeOdd(array));
