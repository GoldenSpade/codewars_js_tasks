const num1 = -3;
const operation = '+';
const num2 = 0;

function calculate(a, x, b) {
  switch (x) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? null : a / b;
    default:
      return null;
  }
}

console.log(calculate(num1, operation, num2));
