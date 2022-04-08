function getNumberOfSquares(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
    if (sum >= n) return i - 1;
  }
}

console.log(getNumberOfSquares(15));
