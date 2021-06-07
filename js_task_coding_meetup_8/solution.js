// input data

const list = [{
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript'
  },
  {
    firstName: 'Agustín',
    lastName: 'M.',
    country: 'Chile',
    continent: 'Americas',
    age: 37,
    language: 'C'
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby'
  },
  {
    firstName: 'Laia',
    lastName: 'P.',
    country: 'Andorra',
    continent: 'Europe',
    age: 55,
    language: 'Ruby'
  },
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 65,
    language: 'PHP'
  },
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 65,
    language: 'PHP'
  },
];

// solution

function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    .every(function(x){
    return list.some(function(y){
      return x === y.continent;
    });
  });
}

// control

console.log(allContinents(list));
