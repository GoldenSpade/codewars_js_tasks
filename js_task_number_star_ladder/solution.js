// input data

const num = 10;

// function

function pattern(n) {
  let output = '1';

  for (let i = 2; i <= n; i++) {
    output += '\n' + '1' + (new Array(i).join('*')) + (i).toString();
  };

  return output;
};

// control

console.log(pattern(num));
