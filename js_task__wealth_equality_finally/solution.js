function redistributeWealth(wealth) {
  const sum = wealth.reduce((a, b) => a + b);
  const middle = sum / wealth.length;

  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = middle;
  }
}

console.log(redistributeWealth([0, 10, 10, 5, 8, 9]));
