// input data

const num = 80200;

// solution

function createArrayOfTiers(num) {
  let str = '';
  const result = [];

  for (let i = 0; i < num.toString().length; i++) {
    str += num.toString()[i];
    result.push(str);
  }
  
  return result;
}

// control

console.log(result);
