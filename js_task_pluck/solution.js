// input data

const objs = [{
  a: 1,
  b: 3
}, {
  a: 2
}];

// solution

function pluck(arr, x) {
  return arr.map((elem) => elem[x]);
};

// control

console.log(pluck(objs, 'a'))
