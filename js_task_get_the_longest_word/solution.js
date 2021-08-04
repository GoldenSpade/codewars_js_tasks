// input data

const array = ['One', 'two', 'six', 'seven'];

// solution

function getLongest(arr) {
  const lengsOfWords = arr.map((x) => x.length);
  const maxLength = [...lengsOfWords].sort((a, b) => b - a)[0];
  
  return array[lengsOfWords.indexOf(maxLength)];
}

// control

console.log(getLongest(array));
