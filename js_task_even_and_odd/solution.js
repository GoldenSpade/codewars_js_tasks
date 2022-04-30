const input = 126453;

function evenAndOdd(num) {
  let str1 = "";
  let str2 = "";

  [...String(num)].forEach((x) => {
    if (+x % 2 === 0) {
      str1 += x;
    } else {
      str2 += x;
    }
  });

  return [str1, str2].map((x) => +x || 0);
}

console.log(evenAndOdd(input));
