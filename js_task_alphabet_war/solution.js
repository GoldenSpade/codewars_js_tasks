const str = 'wwwwwwz';


function alphabetWar(fight) {
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  };
  
  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };
  
  let leftCount = 0;
  let rightCount = 0;
  
  [...fight].forEach((x) => {
    if (x === 'w') {
      leftCount += leftSide.w;
    }
    if (x === 'p') {
      leftCount += leftSide.p;
    }
    if (x === 'b') {
      leftCount += leftSide.b;
    }
    if (x === 's') {
      leftCount += leftSide.s;
    }
  
    if (x === 'm') {
      rightCount += rightSide.m;
    }
    if (x === 'q') {
      rightCount += rightSide.q;
    }
    if (x === 'd') {
      rightCount += rightSide.d;
    }
    if (x === 'z') {
      rightCount += rightSide.z;
    }
  });
  
  if (leftCount > rightCount) {
    return 'Left side wins!';
  } else if (leftCount === rightCount) {
    return "Let's fight again!";
  } else {
    return 'Right side wins!';
  };
};

console.log(alphabetWar(str));