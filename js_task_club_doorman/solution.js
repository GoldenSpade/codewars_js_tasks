// input data

const word = 'apple';

// solution

function passTheDoorMan (word){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const doubleLetter = [...word].filter((letter, idx) => word.indexOf(letter) !== idx)[0];
  return (alphabet.indexOf(doubleLetter) + 1) * 3;
}

// control

console.log(result);
