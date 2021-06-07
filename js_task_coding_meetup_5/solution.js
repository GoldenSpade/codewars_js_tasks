// input data

const list = [{
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C'
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript'
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby'
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C'
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C'
  },
];

// solution

function countLanguages(list) {
  let langCount = {};
  for (let i = 0; i < list.length; i++) {
    if (langCount[list[i].language]) {
      langCount[list[i].language]++;
    } else {
      langCount[list[i].language] = 1;
    };
  };
  return langCount;
}

// control

console.log(countLanguages(list));
