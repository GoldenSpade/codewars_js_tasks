const a = 20;
const b = 27;

function isCoprime(x, y) {
  const divisorsX = [];
  const divisorsY = [];

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      divisorsX.push(i);
    }
  }

  for (let i = 1; i <= y; i++) {
    if (y % i === 0) {
      divisorsY.push(i);
    }
  }

  const arrNums = divisorsX.concat(divisorsY);
  const arrNumsFitered = arrNums.filter((x, i) => arrNums.indexOf(x) !== i);

  return arrNumsFitered.length === 1 && arrNums[0] === 1;
}
