//input data

let letters = 'zbk';
let coords = [0, 1];

// solution

function lastSurvivor(letters, coords) {
  letters = letters.split('');

  coords.forEach((_, i) => {
    letters.splice(coords[i], 1)
  });

  return letters.join('');
}

// control

console.log(lastSurvivor(letters, coords));
