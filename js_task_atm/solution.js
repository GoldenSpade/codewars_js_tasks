let num = 770;

function solve(n) {
  const arr = [500, 200, 100, 50, 20, 10];
  let count = 0
  for (let i of arr){
    while( i <= n ){
      n = n - i
      count += 1
    }
  }
  return n !== 0 ? -1 : count
}

console.log(solve(num));
