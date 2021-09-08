const n = 2015;

function cyclops(num) {
  const numBin = Number(num).toString(2);

  const arr = numBin.split('0');

  if (arr.length === 2 && arr[0] === arr[1]) {
    return true;
  } else {
    return false;
  }
}

console.log(cyclops(n));
