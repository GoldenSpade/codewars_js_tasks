const deers = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus"
];

function sortReindeer(reindeerNames) {
  return [...reindeerNames].sort((a, b) =>
    a.split(' ')[1].localeCompare(b.split(' ')[1]));
}

console.log(sortReindeer(deers));
