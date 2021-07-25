// input data

const number = 73312;

// solution

function divisibleByLast(number) {
  const arr = number.toString().split('');
  const result = [false];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % arr[i] === 0) {
      result.push(true)
    } else {
      result.push(false);
    }
  };
  
  result.pop();

  return result;
}

// control

console.log(divisibleByLast(number));
