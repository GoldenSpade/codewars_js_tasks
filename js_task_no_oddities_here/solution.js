// input data

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// solution

function noOdds( values ){
  return values.filter((elem) => elem % 2 === 0);
};

// control

console.log(noOdds(arr));
