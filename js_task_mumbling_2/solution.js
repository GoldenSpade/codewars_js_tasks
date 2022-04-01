const str = 'ZpglnRxqenU';

function accum(str) {
  let newStr = '';

  [...str].forEach((x, i) => {
    newStr += x.toUpperCase()
  
    for (let j = 0; j < i; j++) {
      newStr += x.toLowerCase()
    };
  
    newStr += '-'; 
  });
  
  return newStr.substring(0, newStr.length - 1);
};

console.log(accum(str));
