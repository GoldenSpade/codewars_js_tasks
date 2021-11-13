const array = [2, 4, 6, 8];

const isMonotone = function(arr){
  const sorted = [...arr]
    .sort((a, b) => (a - b));

    return arr.every((elem, i) => elem === sorted[i]);
};

console.log(isMonotone(array));
