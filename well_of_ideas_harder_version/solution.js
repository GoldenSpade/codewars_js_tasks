// input data

const arr = [
  ['GooD', 'bad', 'bAd', 'bad'],
  ['bad', 'bAd', 'bad'],
  ['bad', 'bAd', 'bad', 8, 9, 10, 15, 29]
];

// solution

function well(x) {
  let count = 0;

  x.map((a) => {
    return a.map((b) => {
      if (String(b).toLowerCase() === 'good') {
        count++;
      }
    })
  })

  if (count > 0 && count <= 2) {
    return 'Publish!';
  }

  if (count > 2) {
    return 'I smell a series!';
  }

  if (count === 0) {
    return 'Fail!';
  }
}

//control

console.log(well(arr));
