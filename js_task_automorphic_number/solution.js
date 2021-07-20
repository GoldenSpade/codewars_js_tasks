// input data

const number = 6;

// solution

function automorphic(num) {
  const arr = Math.pow(num, 2)
    .toString()
    .split(String(num))
    .reverse();
  if (arr[0] === '') {
    return 'Automorphic';
  } else {
    return 'Not!!';
  }
}

// control

console.log(automorphic(number));
