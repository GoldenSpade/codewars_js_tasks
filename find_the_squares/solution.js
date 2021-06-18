// input data

const num = 9;

// solution

const findSquares = num => {
  const numbers = [];
  let squares = [];

  for (let i = 1; i <= num; i++) {
    numbers.push(i);
  }

  squares = numbers.map((elem) => Math.pow(elem, 2));

  for (let i = 0; i < squares.length; i++) {
    if (squares[i + 1] - squares[i] === num) {
      return `${squares[i + 1]}-${squares[i]}`;
    }
  }
};

// control

console.log(findSquares(num));
