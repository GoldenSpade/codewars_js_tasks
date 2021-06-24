//input data

const str = '_nnnnnnn_n__n______nn__nn_nnn';

// solution

function bump(x) {
  let counter = 0;

  x.split('').map((char) => {
    if (char === 'n') {
      counter++;
    }
  });

  if (counter <= 15) {
    return 'Woohoo!';
  } else {
    return 'Car Dead';
  }
}

// control

console.log(bump(str));
