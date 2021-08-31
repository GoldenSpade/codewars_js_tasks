const arr = [false, false, true, false, false];

function findNeededGuards(k) {
  let out = 0;
  for( let i = 0; i < k.length-1; i++ ){
    if ( !k[i] && !k[i+1] ){
      k[i+1] = true
      i += 1;
      out += 1;
    }
  }
  return out;
}

console.log(findNeededGuards(arr));
