const str = '4of Fo1r pe6ople g3ood th5e the2';

function order(words) {
  const nums = [...words]
  .map((x) => parseInt(x))
  .filter((y) => !isNaN(y));

  const arr = words.split(' ').map((x) => x.split(''));
    
  arr.forEach((x, i) => {
    x.unshift(nums[i]);
  });

  const sorted = arr.sort((a, b) => a[0] - b[0]);
  sorted.forEach(x => x.shift())

  return sorted.map(x => x.join('')).join(' ');
}

console.log(order(str));
