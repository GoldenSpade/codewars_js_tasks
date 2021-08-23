const string = 'abcdef';

function capitalize(str) {
  const elem1 = [...str]
    .map((char, i) => {
      if (i % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char;
      }
    }).join('');

  const elem2 = [...str]
    .map((char, i) => {
      if (i % 2 !== 0) {
        return char.toUpperCase();
      } else {
        return char;
      }
    }).join('');

  return [elem1, elem2]
};

console.log(capitalize(string));
