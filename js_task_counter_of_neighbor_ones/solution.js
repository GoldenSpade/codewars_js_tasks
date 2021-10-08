const input = [1, 1, 1, 0, 0, 1, 0, 1, 1, 0];

const result = [...input]
  .join('')
  .split('0')
  .map((x) => x.length)
  .filter((y) => y > 0);

console.log(result);
