let array = [197, 456, 957, 512, 524, 57, 587, 440, 530, 136, 414, 695, 433, 113, 515];

let direction = 'right';
let steps = 2;

function loopArr(arr, direction, steps) {

  for (let i = 0; i < steps; i++) {
    if (direction === 'right') {
      arr.unshift(arr.pop());
    };
    if (direction === 'left') {
      arr.push(arr.shift());
    };
  }
  return arr;
}

console.log(loopArr(array, direction, steps));
