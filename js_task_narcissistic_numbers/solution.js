const num = 435;

function isNarcissistic(n){

  let number = 0;
  let digits = String(n);
  
  for (let i = 0; i < digits.length; i++) {
    number += Number(digits[i]) ** digits.length;
  }
  
  return number === n;
}

console.log(isNarcissistic(num));
