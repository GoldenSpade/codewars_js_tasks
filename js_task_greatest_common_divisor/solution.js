// input data

const a = 1590771464;
const b = 1590771620;

// solution

function mygcd(x, y) {
  let temp;
  while (y) {
    temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

// control

console.log(mygcd(a, b));
