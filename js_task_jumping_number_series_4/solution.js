// input data

const num = 43434568;

// solution

function jumpingNumber(number) {
  const arr = number.toString().split('');
  
  const arrOfSubs = [];
  let result = null;
  
  for (let i = 0; i < arr.length; i++) {
    const sub = Math.abs(+arr[i] - +arr[i - 1]);
  
    if (!isNaN(sub)) {
      arrOfSubs.push(sub);
    }
  };
  
  result = arrOfSubs.every((x) => x === 1);

  if (result) {
    return 'Jumping!!';
  }
  return 'Not!!';
}

// control
  
console.log(jumpingNumber(num));
