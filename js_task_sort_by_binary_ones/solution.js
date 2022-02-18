const array = [1, 15, 5, 7, 3];

function sortByBinaryOnes(list) {
  return list.sort(
    (a, b) =>
    b.toString(2).replace(/0/g, ``).length -
    a.toString(2).replace(/0/g, ``).length || a - b
  );
};

console.log(sortByBinaryOnes(array));
