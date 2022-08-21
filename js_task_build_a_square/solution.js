const num = 8;

function generateShape(integer){
  let singleStr = '';
  let res = '';

  for (let i = 1; i <= integer; i++) {
    singleStr += '+';
  }

  for (let i = 0; i < integer; i++) {
    res += singleStr + '\n';
  }

  return res.substring(0, res.length - 1);
}

console.log(generateShape(num));
