const str = 'not picking';

function spoonerize(words) {
  const arr = words.split(' ');
  const firstLetters = [...arr].map((x) => x[0]).reverse();

  return [...arr].map((x, i) =>
      firstLetters[i] +
      x.substr(1, x.length))
    .join(' ');
};

console.log(spoonerize(str));
