const str = 'barack hussain Obama';

function initials(n) {
  const arr = n.split(' ');

  let letters = arr.map((x) => x[0].toUpperCase() + '.');

  letters.pop();

  const lastWord = [...arr].reverse()[0];

  return `${letters.join('')}${lastWord[0].toUpperCase()}${lastWord.slice(1)}`;
}

console.log(initials(str));
