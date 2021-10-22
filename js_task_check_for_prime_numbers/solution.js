const number = 61;

function isPrime(num) {

  if (num === 0 || num === 1) {
    return false;
  }

  const divisors = [];
  let result;

  for (let i = 1; i <= num; i++) {
    let div = num / i;
    divisors.push(div)
  }

  if (
    Number.isInteger(divisors[0]) &&
    Number.isInteger([...divisors].reverse()[0])
  ) {
    result = true;
  };

  divisors.shift();
  divisors.pop();

  result = divisors.every((x) => !Number.isInteger(x));

  return result;
}

console.log(isPrime(number));
