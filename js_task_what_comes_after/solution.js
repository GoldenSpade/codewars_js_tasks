// input data

const str = 'Katy Perry is on the radio!';
const l = 'r';

// solution

function comes_after(str,l) {
  var res = '';
 
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].toLowerCase() == l && str[i + 1].toLowerCase() != str[i + 1].toUpperCase()) res += str[i + 1];
  }

  return res;
}

// control

console.log(comes_after(str, l));
