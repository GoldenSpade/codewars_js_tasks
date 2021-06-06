//input data

const list = [{
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript'
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python'
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure'
  }
];

// solution

function getFirstPython(list) {
  let result = list.find((person) => person.language === 'Python');

  if (result !== undefined) {
    return `${result.firstName}, ${result.country}`;
  } else {
    return 'There will be no Python developers';
  }
}

// control

console.log((getFirstPython(list)));
