// input data

const number = 14837768;

// solution

function digitize(n) {
  const arr = Array.from(n.toString());
  
  return arr.map((elem) => +elem);
}

// control

console.log(digitize(number));
