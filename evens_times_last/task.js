//input data

// numbers = [2, 3, 4, 5] // must be 30 at result

// solution

const numbers = [2, 3, 4, 5];

function evenLast(numbers) {
  
  if (numbers.length === 0) {
    return 0;
  }
  
  let lastElem = [...numbers].reverse()[0];
  let evenNumbers = numbers.filter((x, i) => i % 2 === 0);
  let mult = evenNumbers.map((x) => x *= lastElem)

  let sum = mult.reduce((a, b) => a + b);
  
  return sum;
}

console.log(evenLast(numbers))
