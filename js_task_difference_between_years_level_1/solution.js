const str1 = '1997/10/10';
const str2 = '2015/10/10';

let howManyYears = function(date1, date2){
  return Math.abs(+date1.split('/')[0] - +date2.split('/')[0]);
}

console.log(howManyYears(str1, str2));
