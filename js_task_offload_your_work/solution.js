const a = 141
const b = [
  [1, 55],
  [0, 25]
];

workNeeded = (projectMinutes, freelancers) => {
  let h;
  let m;
  let minuteDiff;
  let othersMinutes = 0;

  freelancers.map(f => {
    othersMinutes += f[1] + f[0] * 60;
  });

  minuteDiff = projectMinutes - othersMinutes;

  if (minuteDiff <= 0) {
    return 'Easy Money!';
  } else if (minuteDiff < 60) {
    return `I need to work 0 hour(s) and ${minuteDiff} minute(s)`;
  } else {
    h = Math.floor(minuteDiff / 60);
    m = minuteDiff % 60;

    return `I need to work ${h} hour(s) and ${m} minute(s)`;
  }
}

console.log(workNeeded(a, b));
