// input data

const number = '5678';

// solution

function sum(digits) {
  if (typeof digits === 'undefined') return '';
  const string = String(digits);
  let sum = 0;
  let result = ''
  for (let i = 0; i < string.length; i++) {
    result += `${string[i]} ${i===string.length-1?'':'+ '}`;
    sum += Number(string[i]);
  }
  result += `= ${sum}`;
  return result;
  
}

// control

console.log(sum(number));
