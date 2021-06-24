// input data

let num = 30;

// solution

function getDivisorsCnt(n){
  let count = 0;
  
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}

// control

console.log(getDivisorsCnt(num));
