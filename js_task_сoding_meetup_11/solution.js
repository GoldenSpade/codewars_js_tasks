//input data

const list = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

// sulution

function getAverageAge(list) {
  const arrOfAges = list.map((person) => person.age);
  const sumOfAges = arrOfAges.reduce((a, b) => a + b);
  const result = Math.round(sumOfAges / arrOfAges.length);
  
  return result;
}

//control

console.log(getAverageAge(list));
