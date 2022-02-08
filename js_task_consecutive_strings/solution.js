const a = ["zone", "abigail", "theta", "form", "libe", "zas"];
const b = 2;

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length) ?
      currString :
      long;
  }, '');
}

console.log(longestConsec(a, b));
