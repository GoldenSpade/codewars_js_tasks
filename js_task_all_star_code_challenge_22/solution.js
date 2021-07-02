// input data

const seconds = 323500;

// solution

function toTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(((seconds / 3600) - hours) * 60);
  
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

// control

console.log(toTime(seconds));