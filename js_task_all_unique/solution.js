// input data

const str = 'abcdef';

// solution

const result = [...str].every((x, i) => [...str].indexOf(x) == i);

// control

console.log(result);
