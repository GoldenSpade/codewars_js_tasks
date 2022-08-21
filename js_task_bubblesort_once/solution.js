const array = [9, 7, 5, 3, 1, 2, 4, 6, 8];

function bubblesortOnce(arr) {
  const copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    let tempElem = null;

    if (copy[i] > copy[i + 1]) {
      tempElem = copy[i + 1];
      copy[i + 1] = copy[i];
      copy[i] = tempElem;
    }
  }
  return copy;
}

console.log(bubblesortOnce(array));
