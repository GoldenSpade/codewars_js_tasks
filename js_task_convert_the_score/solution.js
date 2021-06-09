// input data

const strNums = 'Arsenal just conceded another goal, two one';

// solution

function scoreboard(strNums) {
  const numbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'nil': 0,
  };

  const firstNum = strNums.split(' ').reverse()[1];
  const secondNum = strNums.split(' ').reverse()[0];
  
  return [numbers[firstNum], numbers[secondNum]];
}

// control

console.log(scoreboard(strNums));
