let func = (...rest) => {
  return (rest.reduce((a, b) => a + b) / rest.length);
};

console.log(func(1, 2, 3, 4, 5));
