// input data

const num = 12;

// solution

function shadesOfGrey(n) {
  let res = []
  if (n < 1) return res;
  if (n > 254) n = 254;
  for (let i = 1; i <= n; i++) {
    res.push('#' + i.toString(16).padStart(2, '0').repeat(3));
  }
  return res
};

// control

console.log(shadesOfGrey(num));
