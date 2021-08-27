const userName = 'riley';

let greet = function (name) {
  const firstLetter = name
    .toLowerCase()
    .substr(0, 1)
    .toUpperCase();

  return `Hello ${firstLetter + name.slice(1, name.length).toLowerCase()}!`;
};

console.log(greet(userName));
