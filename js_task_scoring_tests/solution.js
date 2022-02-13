const array = [2, 1, 2, 1, 0, 1, 2, 2, 2, 0, 2, 0, 0, 0, 0, 1, 2, 2, 1];

const a = 2;
const b = 3;
const c = 8;

function scoreTest(str, right, omit, wrong) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 0) {
      sum += right;
    } else if (str[i] === 1) {
      sum += omit;
    } else if (str[i] === 2) {
      sum -= wrong;
    };
  };
  return sum;
};

console.log(scoreTest(array, a, b, c));
