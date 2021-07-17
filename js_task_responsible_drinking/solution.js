// input data

const str = "1 glasse of wine and 1 shot";

// solution

function hydrate(s) {
  const arr = s.split('');

  let sum = arr.map((x) => +x)
    .filter((elem) => !isNaN(elem))
    .reduce((a, b) => a + b)

  if (sum === 1) {
    return `${sum} glass of water`;
  } else {
    return `${sum} glasses of water`;
  }
}

// control

console.log(hydrate(str));
