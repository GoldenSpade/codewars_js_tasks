// input data

const obj = {
  name: 'Jeremy',
  age: 24,
  role: 'Software Engineer'
};

// solution

function convertHashToArray(hash) {
  const result = [];

  for (let key in hash) {
    let arr = [];
    arr.push(key.toString(), hash[key]);

    result.push(arr);
  }

  return result.sort((a, b) => a[0].localeCompare(b[0]));
};

// control

console.log(convertHashToArray(obj));
