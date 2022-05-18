const str = 'xoOoxx';

function XO(str) {
  let x = str.toLowerCase().split('x').join('').length;
  let o = str.toLowerCase().split('o').join('').length;

  return x === o;
}

console.log(XO(str));
