// input data

const ages = [18, 25, 55, 88, 12, 17, 50];

// solution

function twoOldestAges(ages) {
  const copy = [...ages].sort((a, b) => b - a);

  return [copy[1], copy[0]];
};

// control

console.log(twoOldestAges(ages));
