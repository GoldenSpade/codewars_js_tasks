const num = 155;

function solution(value){
  let arrFromVal = value.toString().split('');
  let count = 5 - arrFromVal.length;

  for (let i = 0; i < count; i++) {
    arrFromVal.unshift('0');
  }

  return `Value is ${arrFromVal.join('')}`;
}

console.log(solution(num));
