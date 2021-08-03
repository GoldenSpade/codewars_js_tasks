// input data

const digits = [1, 3, 1, 5, 2, 5, 2, 6, 3];

// solution

function getLargestNumbers(numbers) {
  const sorted = [...numbers].sort((a, b) => b - a);

  return [sorted[0], sorted[1], sorted[2], sorted[3], sorted[4]];
}

// control

console.log(getLargestNumbers(digits));
