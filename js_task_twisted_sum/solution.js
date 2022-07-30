const num = 12;

function twistedSum(n) {
  const numbers = [...Array(n + 1).keys()]
  
  numbers.shift();

  const res = numbers.map(num => {
    const numStr = String(num);

    if(numStr.length > 1) {
      return [...numStr].reduce((a, b) => +a + +b);
    } else {
      return +numStr;
    }
  }).reduce((a, b) => a + b);
  
  return res;
}

console.log(num);
