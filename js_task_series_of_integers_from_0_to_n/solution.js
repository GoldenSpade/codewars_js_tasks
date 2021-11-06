function generateIntegers(n) {
  const array = [];

  for (let i = 0; i <= n; i++) {
    array.push(i);
  };

  return array;
};

console.log(generateIntegers(10));
