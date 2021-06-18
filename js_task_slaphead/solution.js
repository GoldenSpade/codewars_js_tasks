// input data

const str = '---/----/-//-/-';

// solution

function bald(x) {
  const arrFromStr = x.split('');

  let count = 0;
  let phrase = '';

  arrFromStr.forEach((elem) => {
    if (elem === '/') {
      count++;
    }
  })

  if (count === 0) {
    phrase = 'Clean!'
  }
  if (count === 1) {
    phrase = 'Unicorn!'
  }
  if (count === 2) {
    phrase = 'Homer!'
  }
  if (count >= 3 && count <= 5) {
    phrase = 'Careless!'
  }
  if (count > 5) {
    phrase = 'Hobo!'
  }

  return [x.replace(/\//g, '-'), phrase];
}

// control

console.log(bald(str));
