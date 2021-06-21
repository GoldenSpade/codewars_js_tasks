// input data

const scores = [90, 98, 89, 100, 100, 86, 94];

// solution

function average(scores) {
  let sum = scores.reduce((a, b) => a + b);

  return Math.round(sum / scores.length);
}


// control

console.log(average(scores));
