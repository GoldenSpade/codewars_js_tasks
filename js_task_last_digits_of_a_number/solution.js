const num = 637547;
const amount = 3;

function lastDigit(N, D) {

  if (D <= 0) {
    return [];
  };

  const reversed = [...N.toString()].reverse();
  let result = [];

  if (D > reversed.length) {
    D = reversed.length;
  };

  for (let i = 0; i < D; i++) {
    result.push(reversed[i]);
  };

  return result.reverse()
    .map((x) => +x);
};

console.log(lastDigit(num, amount));
