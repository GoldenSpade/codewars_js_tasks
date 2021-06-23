// input data

const str = 'abcdefgAlop';

// solution

function isIsogram(str) {
  const arrFromStr = str.toLowerCase().split('');
  
  arrFromStr.sort((a, b) => a.localeCompare(b));

  let count = 0;

  for (let i = 0; i < arrFromStr.length; i++) {
    if (arrFromStr[i] === arrFromStr[i + 1]) {
      count++;
    } 
  }

  if (count > 0) {
    return false;
  } else {
    return true;
  }
}

// control

console.log(isIsogram(str));
