// input data

const str = 'This is Charlie. He pouts until he gets to go on the swing. 5/10 manipulative af.';
const rating = 12;

// solution

function weRateDogs(str, rating) {
  const arr = str.split(' ');

  return arr.map((word) => {
    let arrNew = [];
    let strNew = '';
    if (word.includes('/')) {
      arrNew = word.split('/');
      arrNew[0] = rating;
      strNew = arrNew.join('/');
      word = strNew;
    }
    return word;
  }).join(' ')
}

// control

console.log(weRateDogs(str, rating));
