function ageInDays(year, month, day) {
  const birthday = new Date([year, month, day].join(","));
  const today = new Date();

  const days = Math.floor((today - birthday) / 86400000);

  return `You are ${days} days old`;
}

console.log(ageInDays(1988,05,16));
