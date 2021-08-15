const str = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
let sum = 0;

function sumOfIntegersInString(string){
  let sum = 0;

  const arrNums = [...string].map((x) => parseInt(x))
    .join('')
    .split('NaN');

  arrNums.forEach((x) => {
    if (!isNaN(parseInt(x))) {
      sum += parseInt(x);
    };
  });
  return sum;
}

console.log(sumOfIntegersInString(str));
