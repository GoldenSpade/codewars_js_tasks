// input data

const str = 'abba';

// solution

function solve(str){
  let reverseStr = str.split('').reverse().join('');
  let match = 0;
  
  for (let i = 0; i < str.length; i++) {
    if(reverseStr[i] === str[i]) {
      match++;
    }
  }

  return (match === str.length - 2) || (match == str.length && str.length % 2 != 0);
}

// control

console.log(solve(str));
