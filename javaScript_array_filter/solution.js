// input data

const numbersArray = [1, 2, 3, 6, 8, 10];

// solution

function getEvenNumbers(numbersArray){
  return numbersArray.filter((elem) => elem % 2 === 0);
}

// control

console.log(getEvenNumbers(numbersArray));
