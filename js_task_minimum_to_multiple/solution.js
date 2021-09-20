let a = 10;
const x = 6;

function minimum(a, x) {
  for (i = 0; i <= x; i++) {
    if ((a + i) % x === 0 || (a - i) % x === 0) {
      return i;
      break;
    }
  }
}

console.log(minimum(a, x));
