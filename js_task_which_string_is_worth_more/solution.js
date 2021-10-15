const str1 = 'AaBbCcXxYyZz0189';
const str2 = 'KkLlMmNnOoPp4567';

function highestValue(a, b) {
  const sum1 = a.split('')
    .map((_, i) => a.charCodeAt(i))
    .reduce((a, b) => a + b);

  const sum2 = b.split('')
    .map((_, i) => b.charCodeAt(i))
    .reduce((a, b) => a + b);

  if (sum1 > sum2) {
    return a;
  } else if (sum1 === sum2) {
    return a;
  } else {
    return b;
  }
}

console.log(highestValue(str1, str2));
