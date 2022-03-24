function spacify(str) {
  let res = [];

  str.split('').forEach((char) => {
    if (char === ' ') {
      res.push('  ');
    } else {
      res.push(char);
      res.push(' ');
    }
  });

  res.splice(-1);

  return res.join('');
}

console.log(spacify('12345'));
