// input data

const stringOfInts = '1 2 3 4 5';

// solution

function summy(stringOfInts){
  return +stringOfInts.split(' ').reduce((a, b) => +a + +b);
}

// control

console.log(summy(stringOfInts));
