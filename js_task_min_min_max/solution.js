const arr = [1, 3, -3, -2, 8, -1];

function minMinMax(array) {
  const sorted = array.sort((a, b) => a - b);

  const min = sorted[0];
  const max = [...sorted].reverse()[0];
  let minimumAbsent = 0;

  for (let i = min; i <= max; i++) {
    if (!sorted.includes(i)) {
      minimumAbsent = i;
      break;
    }
  }
  
  return [min, minimumAbsent, max]
}

console.log(minMinMax(arr));
