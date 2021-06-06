//input data

const list = [{
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java'
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python'
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby'
  }
];

//solution

function greetDevelopers(list) {
  return list.map(x => ({
    ...x,
    greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
  }))
}

// control

console.log(greetDevelopers(list));
