const object = {
  abc: '',
  arara: '',
  hello: '',
};

const mirror = (obj) => {
  const keys = Object.keys(obj);
  const reversedKeys = keys.map(key => key.split('').reverse().join(''));

  const res = {};

  keys.forEach((key, i) => {
    res[key] = reversedKeys[i];
  });

  return res;
};

console.log(mirror(object));
