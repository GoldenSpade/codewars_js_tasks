// input data

const number = '658776';

// solution

function convert(number){
  const arrFromNum = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i] + number[i + 1];

    if (i % 2 === 0) {
      arrFromNum.push(String.fromCharCode(num));
    }
  }

  return arrFromNum.join('');
}

// control

console.log(convert(number));
