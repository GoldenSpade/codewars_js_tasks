const array = ["abc:123", "cde:456"];

function tailSwap(arr) {
  const arrNew = arr.map((x) => x.split(':'));

  const elem1 = [arrNew[0][0], arrNew[1][1]].join(':');
  const elem2 = [arrNew[1][0], arrNew[0][1]].join(':');

  return [elem1, elem2];
}

console.log(tailSwap(array));
