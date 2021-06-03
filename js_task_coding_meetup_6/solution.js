//input data

var list = [{
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript'
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript'
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 65,
    language: 'JavaScript'
  },
];

//solution

function isSameLanguage(list) {
  return list.every((elem1, _, elem2) => elem1.language === elem2[0].language);
}

//control

console.log(isSameLanguage(list));
