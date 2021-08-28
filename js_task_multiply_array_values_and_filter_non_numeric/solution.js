const arr = [ 1, null, function () {}, 2.5, 'string', 10, undefined, {}, [] ];
const num = 3;

function multiplyAndFilter(array, multiplier){
  const arrNums = array.filter((x) => typeof(x) === 'number');

  return arrNums.map((y) => y * multiplier);
};

console.log(multiplyAndFilter(arr, num));
