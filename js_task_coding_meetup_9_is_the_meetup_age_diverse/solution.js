// input data

const list = [{
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 19,
    language: 'Python'
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript'
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
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby'
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C'
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 60,
    language: 'C'
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 75,
    language: 'Python'
  },
  {
    firstName: 'Chloe',
    lastName: 'K.',
    country: 'Guernsey',
    continent: 'Europe',
    age: 88,
    language: 'Ruby'
  },
  {
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 98,
    language: 'PHP'
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript'
  }
];

// solution

function isAgeDiverse(list) {
  let teens = ''
  let twenties = ''
  let thirties = ''
  let fourties = ''
  let fifties = ''
  let sixties = ''
  let seventies = ''
  let eighties = ''
  let nineties = ''
  let hundies = ''


  for (let i = 0; i < list.length; i++) {
    let age = list[i].age
    if (age >= 10 && age < 20) {
      teens += '1'
    }
    if (age >= 20 && age < 30) {
      twenties += '1'
    }
    if (age >= 30 && age < 40) {
      thirties += '1'
    }
    if (age >= 40 && age < 50) {
      fourties += '1'
    }
    if (age >= 50 && age < 60) {
      fifties += '1'
    }
    if (age >= 60 && age < 70) {
      sixties += '1'
    }
    if (age >= 70 && age < 80) {
      seventies += '1'
    }
    if (age >= 80 && age < 90) {
      eighties += '1'
    }
    if (age >= 90 && age < 100) {
      nineties += '1'
    }
    if (age > 100) {
      hundies += '1'
    }
  }

  if (teens && twenties && thirties && fourties && fifties && sixties && seventies && eighties && nineties && hundies) {
    return true
  } else {
    return false
  }
};

// control

console.log(isAgeDiverse(list));
