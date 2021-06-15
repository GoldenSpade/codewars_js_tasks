// input data

const a = "first";
const b = "abcde";

// solution

function shorter_reverse_longer(a, b){
  if (a.length === b.length) {
    return b + a.split('').reverse().join('') + b;
  }
  if (a.length > b.length) {
    return b + a.split('').reverse().join('') + b; 
  }
  if (a.length < b.length) {
    return a + b.split('').reverse().join('') + a; 
  }
}

// control

console.log(shorter_reverse_longer(a, b));
