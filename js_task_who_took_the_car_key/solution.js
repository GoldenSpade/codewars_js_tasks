// input data

const message = ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'];

// solution

function whoTookTheCarKey(message) {
  return message.map((elem) =>
      String.fromCharCode(parseInt(elem, 2)))
    .join('');
};

// control

console.log(whoTookTheCarKey(message));
