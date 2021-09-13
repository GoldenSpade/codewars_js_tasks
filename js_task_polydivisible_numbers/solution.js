const num = 9237788;

function polydivisible(x) {
  let y = x.toString()
  for (let i = 1; i <= y.length; i++) {
    let value = y.slice(0, i)
    if (parseInt(value) % i === 0) {} else {
      return false
    };
  };
  return true;
};

console.log(polydivisible(num));
