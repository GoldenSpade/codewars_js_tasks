// input data

const arr = [15, 11, 10, 7, 12];

// solution

function solve(array){
  const fromMax = [...array].sort((a, b) => b - a);
  const fromMin = [...array].sort((a, b) => a - b);

  const arrNew = [];

  fromMax.forEach((x, i) => {
    if (i % 2 === 0) {
      arrNew.push(x);
    };
    if (i % 2 === 0) {
      arrNew.push(fromMin[i]);
    }
    if (i % 2 !== 0) {
      arrNew.push(x);
    };
    if (i % 2 !== 0) {
      arrNew.push(fromMin[i]);
    }
  });

  return arrNew.filter((x, i) => arrNew.indexOf(x) === i);
};

// control

console.log(solve(arr));
