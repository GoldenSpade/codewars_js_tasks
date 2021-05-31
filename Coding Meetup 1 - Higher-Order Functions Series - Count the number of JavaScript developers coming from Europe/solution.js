//input data

const list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

// solution

function countDevelopers(list) {
  let count = 0;
  list.map((x) => {
    if (x.continent === 'Europe' && x.language === 'JavaScript') {
      count++;
    }
  });

  return count;
}

// Everything is ok. The function works)) 
console.log(countDevelopers(list));
