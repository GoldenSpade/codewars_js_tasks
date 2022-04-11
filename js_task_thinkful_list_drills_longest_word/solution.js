const input = ['explicit', 'is', 'better', 'than', 'implicit'];

function longest(words) {
  return [...words].map((word) => word.length).sort((a, b) => b - a)[0];
};

console.log(longest(input));
