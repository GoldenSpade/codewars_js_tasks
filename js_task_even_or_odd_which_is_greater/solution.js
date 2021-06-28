const num = 1234567;

function evenOrOdd(str) {
  const arrFromNum = str.toString().split('');

  let sumOfOdd = 0;
  let sumOfEven = 0;

  arrFromNum.forEach((x) => {
    if (+x % 2 !== 0) {
      sumOfOdd += +x;
    } else {
      sumOfEven += +x;
    }
  });

  if (sumOfEven > sumOfOdd) {
    return 'Even is greater than Odd';
  };
  
  if (sumOfEven < sumOfOdd) {
    return 'Odd is greater than Even';
  };
  
  if (sumOfEven === sumOfOdd) {
    return 'Even and Odd are the same';
  };
}

console.log(evenOrOdd(num));
