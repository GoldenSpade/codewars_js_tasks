// input data

const a = 4;
const b = 0;

// solution

function cubeSum(n, m) {
  
  if (n === m) {
    return 0;
  };

  const interval = [n, m];
  const allNums = [];
    
  interval.sort((a, b) => a - b);
  
  for (let i = interval[0]; i <= interval[1]; i++) {
    allNums.push(i);
  };
  
  allNums.shift();
  
  return allNums.map((x) => Math.pow(x, 3)).reduce((a, b) => a + b);
}

// control

console.log(cubeSum(a, b));
