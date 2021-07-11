// input data

const str = 'AAabcBBB'

// solution

function isInMiddle(seq) {
  
  let mid = seq.length / 2; 
  let start = mid - 1; 
  let end = start + 3; 
  
  if (!(seq.length&1))
    start -= 1; 
  
  return seq.slice(start, end).indexOf("abc") >= 0; 
};

// control

console.log(isInMiddle(str));
