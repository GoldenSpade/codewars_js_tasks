const stickyCalc = (operator, a, b) => {
  const x = String(Math.round(a)) + String(Math.round(b));
  const y = String(Math.round(b));

  return Math.round(eval(`${x} ${operator} ${y}`));
};

console.log(stickyCalc('/', 433, 930));
