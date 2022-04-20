const input = 'x1KT-8&*@"CmZ__YouO  __Y8Uq-ETtz';

function sumFromString(str) {
  let arr = str.split(/\D/g);
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += +arr[i];
  }

  return res;
}

console.log(sumFromString(str));
