// input data

const string = 'Lets go to the movies';

// solution

function vaporcode(str) {
  const strNew = str.replace(/ /g, '')
    .split('')
    .map((letter) => letter.toUpperCase() + '  ')
    .join('');

  return strNew.substring(0, strNew.length - 2);
}

// control

console.log(result);
