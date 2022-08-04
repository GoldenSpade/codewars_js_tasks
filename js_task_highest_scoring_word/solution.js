const str = 'what time are we climbing up the volcano';

function high(target) {
  const arrAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const sumOfWeights = target.split(' ').map((word) => {
    let letters = word.split('');

    return letters
      .map((letter) => {
        return arrAlphabet.indexOf(letter) + 1;
      })
      .reduce((a, b) => a + b);
  });

  const maxNum = [...sumOfWeights].sort((a, b) => b - a)[0];
  const maxIndex = sumOfWeights.indexOf(maxNum);

  return target.split(' ')[maxIndex];
}

console.log(high(str));
