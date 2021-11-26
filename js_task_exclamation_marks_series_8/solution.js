const phrase = 'Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! ';

function remove(str) {
  let res = '';
  let counter = null;

  let arr = str.split('');

  arr.forEach((letter) => {
    if (letter === '!') {
      counter++;
    };
  });

  res = str.replace(/!/g, '');

  for (let i = 0; i < counter; i++) {
    res += '!';
  };
  return res;
};

console.log(remove(phrase));
