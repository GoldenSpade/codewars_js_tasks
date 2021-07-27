// input data

const arr = [19, 98, 69, 28, 75, 45, 17, 98, 67];
const n = 464;

// solution

function minimumSteps(numbers, value) {
  let sum = 0;
  let count = -1;

  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;

    if (sum >= value) {
      return count;
    }
  }
}

// control

console.log(minimumSteps(arr, n));
