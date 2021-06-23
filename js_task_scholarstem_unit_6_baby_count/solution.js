// input data

const allNames = ['Bob', 'Ted', 'Amy', 'Alice', 'Amy', 'Bob', 'Ted', 'Amy', 'Ted', 'Amy', 'Fred', 'Amy'];
const nameToFind = 'Amy';

// solution

function countName(allNames, name){
  return allNames.filter((elem => elem === name)).length;
};

// control

console.log(countName(allNames, nameToFind));
