// input data

const str = 'What feck damn cake';

// solution

function gordon(a) {

  const replacedArr =
    a.toUpperCase()
    .replace(/[EIOU]/g, '*')
    .replace(/[A]/g, '@')
    .split(' ');

  return replacedArr.map((word) => word + '!!!!').join(' ');
}

// control

console.log(gordon(str));
