// input data

const str = 'abcdef';
const arr = [1, 2, 5];

// solution

function capitalize(str, arr) {
  let arrFromStr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arrFromStr[arr[i]]) {
      arrFromStr[arr[i]] = arrFromStr[arr[i]].toUpperCase();
    }
  }

  arrFromStr = arrFromStr.join('');

  return arrFromStr;
};

// control

console.log(capitalize(str, arr));
