const num = 145;

function strong(num) {
  let nums = num
    .toString()
    .split('')
    .map((x) => +x);

  const factorials = nums.map((x) => {
    let fact = 1;

    for (let i = 1; i <= x; i++) {
      fact *= i;
    }

    return fact;
  });

  let sum = factorials.reduce((a, b) => a + b);

  return sum === num ? "STRONG!!!!" : "Not Strong !!";
};

console.log(strong(num));
