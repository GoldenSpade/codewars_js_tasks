// input data

const word1 = '1versed';
const word2 = 'versed';

// solution

function mispelled(word1, word2) {
  var differ = 0,
      largest = Math.max(word1.length, word2.length);
  for(var i = 0; i < largest; i++) {
    if(word1.indexOf(word2[i]) == -1) {
      differ++;
    }
  }
  if(differ <= 1) {
    return true;
  } else {
    return false;
  }
}

// control

console.log(mispelled(word2, word2));
