const target = ["O", "Q", "R", "S"];

function findMissingLetter(array) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const targetIndexes = [];
  let res = "";

  alphabet.forEach((x, i) => {
    array.forEach((y) => {
      if (y.toLowerCase().includes(x)) {
        targetIndexes.push(i);
      }
    });
  });

  for (let i = 0; i < targetIndexes.length; i++) {
    if (targetIndexes[i + 1] - targetIndexes[i] > 1) {
      res = alphabet[alphabet.indexOf(array[i].toLowerCase()) + 1];
    }
  }

  if (array[0] === array[0].toUpperCase()) {
    return res.toUpperCase();
  } else {
    return res.toLowerCase();
  }
}

console.log(findMissingLetter(target));
