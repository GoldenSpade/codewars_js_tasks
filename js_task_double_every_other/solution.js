const array = [1, 2, 3, 4];

function doubleEveryOther(a) {
  return a.map((x, i) => {
    if (i % 2 !== 0) {
      return x * 2;
    } else {
      return x;
    };
  });
};

console.log(doubleEveryOther(array));