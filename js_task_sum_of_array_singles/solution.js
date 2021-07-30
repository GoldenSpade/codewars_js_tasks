// input data

const array = [4, 5, 7, 5, 4, 8];

// soluton

function repeats(arr) {
  const copy = [...arr];

  copy.sort((a, b) => a - b);

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === copy[i + 1]) {
      copy[i] = null;
      copy[i + 1] = null;
    }
  }

  return copy.filter((x) => typeof x === 'number').reduce((a, b) => a + b);
};

// control

console.log(repeats(array));
