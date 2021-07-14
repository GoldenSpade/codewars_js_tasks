// input data

const str = "bmwvolvoBMW";

// solution

function removeBMW(str){
  
  if (typeof(str) !== 'string') {
    return new Error("This program only works for text.");
  }
  
  return str.replace(/[bmw]/gi, '');
};

// control

console.log(removeBMW(str));
