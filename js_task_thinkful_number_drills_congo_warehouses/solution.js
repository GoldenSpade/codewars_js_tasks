// solution

const boxCapacity = (...size) => size.reduce((a, b) => a * (b * 3 / 4 | 0), 1);

// control

console.log(boxCapacity(32, 64, 16)) // result will be 13824
