const parList = '443454444344544443';
const scoreList = '353445334534445344';

function golfScoreCalculator(parList, scoreList) {
  const arrParList = [...parList].map((num) => +num);
  const arrScoreList = [...scoreList].map((num) => +num);

  const result = arrScoreList.map((x, i) =>
    x - arrParList[i])
    .reduce((a, b) => a + b);

    return result;
};

console.log(golfScoreCalculator(parList, scoreList));
