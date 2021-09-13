const day = 'Friday';
const number = 2;

var AmIAfraid = function (day, num) {
  const days = [{
      day: 'Monday',
      num: 12
    },
    {
      day: 'Wednesday',
      num: 34
    },
    {
      day: 'Thursday',
      num: 0
    },
    {
      day: 'Saturday',
      num: 56
    },
  ];

  let result = days.some((x) =>
    x.day === day &&
    x.num === num);

  if (day === 'Tuesday' && num > 95) {
    result = true;
  };

  if (day === 'Friday' && num % 2 === 0) {
    result = true;
  };

  if (day === 'Sunday' && Math.abs(num) === 666) {
    result = true;
  };

  return result;
}

console.log(AmIAfraid(day, number));
