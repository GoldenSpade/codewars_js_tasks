// input data

const str1 = "*h*s *s v*ry *tr*ng*";
const str2 = "Tiiesae";

// solution

function uncensor(infected, discovered) {
  if (infected.length === 0) {
    return infected;
  };

  const arrOfStr1 = infected.split('');
  let count = 0;

  return arrOfStr1.map((x) => {
    if (x === '*') {
      count++;
      x = discovered[count - 1];
    }
    return x;
  }).join('');
};

// control

console.log(uncensor(str1, str2));
