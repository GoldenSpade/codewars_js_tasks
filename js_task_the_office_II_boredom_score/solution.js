// input data

const stuff = {
  tim: 'change',
  jim: 'accounts',
  randy: 'canteen',
  sandy: 'change',
  andy: 'change',
  katie: 'IS',
  laura: 'change',
  saajid: 'IS',
  alex: 'trading',
  john: 'accounts',
  mr: 'finance'
};

// solution

function boredom(stuff) {
  const stuffNums = [];
  let sumOfStuff = 0;

  for (key in stuff) {
    if (stuff[key] === 'accounts') {
      stuffNums.push(1);
    }
    if (stuff[key] === 'finance') {
      stuffNums.push(2);
    }
    if (stuff[key] === 'canteen') {
      stuffNums.push(10);
    }
    if (stuff[key] === 'regulation') {
      stuffNums.push(3);
    }
    if (stuff[key] === 'trading') {
      stuffNums.push(6);
    }
    if (stuff[key] === 'change') {
      stuffNums.push(6);
    }
    if (stuff[key] === 'IS') {
      stuffNums.push(8);
    }
    if (stuff[key] === 'retail') {
      stuffNums.push(5);
    }
    if (stuff[key] === 'cleaning') {
      stuffNums.push(4);
    }
    if (stuff[key] === 'pissing about') {
      stuffNums.push(25);
    }
  }

  sumOfStuff = stuffNums.reduce((a, b) => a + b);

  if (sumOfStuff <= 80) {
    return 'kill me now'
  }
  if (sumOfStuff < 100 && sumOfStuff > 80) {
    return 'i can handle this'
  }
  if (sumOfStuff >= 100) {
    return 'party time!!'
  }
}

// control

console.log(boredom(stuff));
