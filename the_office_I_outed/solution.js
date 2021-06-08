// input data

const meet = {
  'tim': 0,
  'jim': 2,
  'randy': 0,
  'sandy': 7,
  'andy': 0,
  'katie': 5,
  'laura': 1,
  'saajid': 2,
  'alex': 3,
  'john': 2,
  'mr': 0
};

const boss = 'laura';

// solution

function outed(meet, boss){
  const meetLength = Object.keys(meet).length;
  let sum = 0;
  let rating = 0;

  meet[boss] = meet[boss] * 2;

  for (let key in meet) {
    sum += meet[key];
  }

  rating = sum / meetLength;

  if (rating <= 5) {
    return 'Get Out Now!';
  } else {
    return'Nice Work Champ!';
  }
}

// control

console.table(outed(meet, boss));
