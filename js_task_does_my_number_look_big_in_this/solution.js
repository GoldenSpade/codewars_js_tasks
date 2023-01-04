const num = 153;

function narcissistic(value) {
  const length = value.toString().length;

  const res = value
    .toString()
    .split("")
    .map((x) => Math.pow(+x, length))
    .reduce((a, b) => a + b);

  return value === res;
}

console.log(narcissistic(num))
