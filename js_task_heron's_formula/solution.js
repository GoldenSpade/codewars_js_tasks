// solution

function heron(a, b, c) {
  let s = (a + b + c) / 2;
  
  return +(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
}

// control

console.log(heron(3, 4, 5));
