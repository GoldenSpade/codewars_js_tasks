// input data

const arr = [-94, -99, -100, -99, -96, -99];

// solution

function menFromBoys(array) {
  const even = [];
  const odd = [];
  
  array.map((x) => {
    if (x % 2 === 0) {
      even.push(x);
    } else {
      odd.push(x);
    }
  });
  
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);
  
  const unique = even.concat(odd);
  
  return unique.filter((item, index) => unique.indexOf(item) === index)
};

// control

console.log(menFromBoys(arr));
