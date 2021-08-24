const a = [1, -2];
const b = [2, 1];

function isOrthogonal(arr1, arr2) {
  const arrRes = arr1.map((num, i) => {
    return num * arr2[i];
  });

  const result = arrRes.reduce((a, b) => a + b);

  return result === 0 ? true : false;
};

console.log(isOrthogonal(a, b));
