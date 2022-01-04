function replaceAll(seq, find, replace) {
  let res = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] == find) {
      res.push(replace);
    } else {
      res.push(seq[i]);
    }
  }
  if (typeof (seq) == 'string') {
    return res.join('');
  }
  return res;
}

console.log(replaceAll([1, 2, 2], 1, 2));
