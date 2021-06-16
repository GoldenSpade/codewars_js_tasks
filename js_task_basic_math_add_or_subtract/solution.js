// input data

const input = "1plus2plus3minus4";

// solution

function calculate(str) {
  return eval(str.replace(/plus/g, '+')
    .replace(/minus/g, '-'))
    .toString();
}

// control

console.log(calculate(input));
