const string = 'uc#z,?t88u_t_d#<q!} fif1_#ed(+';

function findMiddle(str) {
  const arrNums = [];
  let result = 0;

  [...str].forEach((letter) => {
    if (!isNaN(+letter) && +letter !== 0) {
      arrNums.push(+letter);
    };
  });

  let mult = 0;

  if (arrNums.length > 0) {
    mult = arrNums.reduce((a, b) => a * b);

  } else {
    return -1;
  };

  const multArrStr = [...mult.toString()];

  if (multArrStr.length % 2 === 0) {
    result = +[multArrStr[(multArrStr.length / 2) - 1], multArrStr[(multArrStr.length / 2)]].join('');
  } else {
    result = +[multArrStr[Math.ceil(multArrStr.length / 2) - 1]].join('');
  };

  return result;
};

console.log(findMiddle(string));
