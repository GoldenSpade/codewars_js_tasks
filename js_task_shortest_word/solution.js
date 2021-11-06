const string = 'bitcoin take over the world maybe who knows perhaps';

function findShort(s) {
  return s.split(' ')
    .map((x => x.length))
    .sort((a, b) => a - b)[0]
}

console.log(findShort(string));
