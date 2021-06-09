// input data

const arr = [78, 117, 110, 99, 104, 117, 107, 115];
const limit = 200;

//solution

function smallEnough(arr, limit) {
  return arr.every((elem) => elem <= limit);
}


// control

console.log(smallEnough(arr, limit));
