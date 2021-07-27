// input data

const arr = [5, 6, 9, 9, 7, 6, 4];

// solution

function minValue(values){
  values.sort((a, b) => a - b);

  return +values.filter((x, i) => values.indexOf(x) === i).join('');
}

// control

console.log(minValue(arr));
