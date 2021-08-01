// input data

const arr = [3, 2, 6, 8, 2, 3];

// solution

function maxTriSum(numbers){
  numbers.sort((a, b) => a - b);
  
  const arrNew = numbers.filter((elem, i) =>
    numbers.indexOf(elem) === i).reverse();
  
   return arrNew[0] + arrNew[1] + arrNew[2];
}

// control

console.log(maxTriSum(arr));
