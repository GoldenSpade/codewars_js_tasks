// input data

const input = '3 + 3';

// solution

function expressionOut(expr) {
  const info = {
    '+': 'Plus',
    '-': 'Minus',
    '*': 'Times',
    '/': 'Divided By',
    '**': 'To The Power Of',
    '=': 'Equals',
    '!=': 'Does Not Equal',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten'
  };

  const infoKeys = Object.keys(info)
  const arrFromInput = expr.split(' ');

  if (!(/[\+\-\*\/\=\!]/).test(expr)) return "That's not an operator!"
  const arrNew = [];

  for (let i = 0; i < arrFromInput.length; i++) {
    if (infoKeys.includes(arrFromInput[i])) {
      arrNew.push(info[arrFromInput[i]]);
    }
  }

  return arrNew.join(' ');
}

// control

console.log(expressionOut(input));
