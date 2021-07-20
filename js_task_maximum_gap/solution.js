// input data

const arr = [13, 10, 5, 2, 9];

// solution

function maxGap(array) {
  const copy = [...array].sort((a, b) => a - b);
  const numbers = [];
  
  for (let i = 0; i < copy.length; i++) {
    let diff = copy[i + 1] - copy[i];
  
    if (!isNaN(diff)) {
      numbers.push(diff);
    }
  }
  return Math.max.apply(null, numbers);
}

// control

console.log(maxGap(arr));
