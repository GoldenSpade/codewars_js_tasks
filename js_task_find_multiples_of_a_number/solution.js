function findMultiples(integer, limit) {
  const res = [];

  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      res.push(i);
    }
  }
  return res;
}

console.log(findMultiples(5, 30));
