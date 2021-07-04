// input data

const trips = [
  [2, 8],
  [220, 229],
  [10, 16]
];

// solution

function daysRepresented(trips) {
  const days = Array(365).fill(0);
  for ([a, b] of trips)
    for (let i = a - 1; i < b; i++)
      days[i] = 1;
  return days.reduce((a, b) => a + b);
}

// control

console.log(daysRepresented(trips));
