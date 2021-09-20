const code = 'wQ8Hy0y5m5oshQPeRCkG';

function lottery(str) {
  const arrUnique = [];

  [...str].forEach((x) => {
    if (!isNaN(+x)) {
      arrUnique.push(+x);
    }
  });

  if (arrUnique.length === 0) {
    return 'One more run!'
  };

  return arrUnique.filter((x, i) =>
      arrUnique.indexOf(x) === i)
    .join('');
};

console.log(lottery(code));
