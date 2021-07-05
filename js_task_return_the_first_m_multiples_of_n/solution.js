// input data

const num1 = 3;
const num2 = 5.0;

// solution

function multiples(m, n){
  const result = [];

  for (let i = 1; i <= m; i++) {
    result.push(n * i);
  }
  
  return result;
}

// control

console.log(multiples(num1, num2));
