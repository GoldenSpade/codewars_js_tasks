// input data

const num = 89;

// solution

function disariumNumber(number) {
  const arr = number.toString().split('');
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(+arr[i], i + 1);
  };

  if (number === sum) {
    return 'Disarium !!';
  } else {
    return 'Not !!'
  }
}

// control

console.log(disariumNumber(num));
