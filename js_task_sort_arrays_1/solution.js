// input data

const names = ['мама', 'папа', 'ёжик', 'аня', 'боря'];

// solution

sortme = function (names) {
  return names.sort((a, b) => a.localeCompare(b));
}

// control

console.log(sortme(names));
