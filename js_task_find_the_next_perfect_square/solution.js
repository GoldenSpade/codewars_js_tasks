// input data

const number = 121;

// solution

function findNextSquare(number) {
  let num = Math.sqrt(number);

  if ((num ^ 0) === num) {
    return Math.pow((num + 1), 2);
  }
  else {
    return -1;
  }
}

// control

console.log(findNextSquare(number));
