// input data

const num = 256;

// solution

function perfectRoots(num){
  const roots = [];

  roots.push(Math.sqrt(num));
  roots.push(Math.sqrt(Math.sqrt(num)));
  roots.push(Math.sqrt(Math.sqrt(Math.sqrt(num))));

  return roots.every((elem) => Number.isInteger(elem));
}

// control

console.log(perfectRoots(num));
