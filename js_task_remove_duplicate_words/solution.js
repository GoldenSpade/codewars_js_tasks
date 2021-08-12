// input data

const str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

// solution

function removeDuplicateWords (str) {
  const array = str.split(' ');

  return array.filter((word, i) => array.indexOf(word) === i).join(' ');
}

// control

console.log(removeDuplicateWords(str));
