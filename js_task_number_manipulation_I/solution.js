// input data

const num = 2837743;

// solution

function manipulate(num) {

  const strFromNum = num.toString().split('').reverse();
  let divisor = 0

  if (strFromNum.length % 2 === 0) {
    divisor = strFromNum.length / 2;

    for (let i = 0; i < divisor; i++) {
      strFromNum[i] = 0;
    }

    return +strFromNum.reverse().join('')
  };

  if (strFromNum.length % 2 !== 0) {
    divisor = Math.ceil(strFromNum.length / 2);

    for (let i = 0; i < divisor; i++) {
      strFromNum[i] = 0;
    }

    return +strFromNum.reverse().join('');
  }
}

// control

console.log(manipulate(num));
