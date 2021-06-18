// input data

const x = ['24', '12', '23', '22', '4', '26', '9', '8'];

// solution

function switcher(x) {
  const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
  
  return result = x.map(item => alpha[item]).join('')
}

// control

console.log(switcher(x));
