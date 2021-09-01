const a = 5;
const b = 4;

function area(d, l) {
  if (d < l) return 'Not a rectangle'
  return Number((l * Math.sqrt(d * d - l * l)).toFixed(2));
}

console.log(area(a, b));
