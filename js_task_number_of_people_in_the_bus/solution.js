const people = [
  [10, 0],
  [3, 5],
  [5, 8]
];

let number = function(busStops){
  const entered = busStops.map((x) => x[0])
  .reduce((a, b) => a + b);

  const out = busStops.map((x) => x[1])
    .reduce((a, b) => a + b);

  return entered - out;
}

console.log(number(people));
