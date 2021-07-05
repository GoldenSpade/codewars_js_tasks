const a = 1;
const b = 5;
const res = 5;

function calcType(a, b, res) {
  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;

  if (res === addition) {
    return 'addition';
  }
  if (res === subtraction) {
    return 'subtraction';
  }
  if (res === multiplication) {
    return 'multiplication';
  }
  if (res === division) {
    return 'division';
  }
}

console.log(calcType(a, b, res));
