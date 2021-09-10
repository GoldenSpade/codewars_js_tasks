const arr = [6, 9, 3, 4, 3, 82, 11];
const num = 3;


const findAll = (array, n) => {
  const result = [];

  array.forEach((x, i) => {
    if (x === n) {
      result.push(i);
    };
  });

  return result;
};

console.log(findAll(arr, num));
