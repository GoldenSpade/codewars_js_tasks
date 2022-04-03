const number = '123321';

const palindrome = (num) => {
  if (typeof num !== 'number' || num <= 0) {
    return 'Not valid';
  }
  let numRev = +String(num).split('').reverse().join('');

  return num - numRev === 0;
};

console.log(palindrome(Number));
