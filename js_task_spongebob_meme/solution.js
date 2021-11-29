const str = 'stop Making spongebob Memes!';

function spongeMeme(sentence) {
  return sentence.split('')
    .map((x) => x.toLowerCase()).join('')
    .split('')
    .map((x, i) => {
      if (i % 2 === 0) {
        return x.toUpperCase();
      };
      return x;
    }).join('');
};

console.log(spongeMeme(str));
