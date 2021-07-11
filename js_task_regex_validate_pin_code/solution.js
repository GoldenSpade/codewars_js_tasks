// input data

const pin = '1234';

// solution

function validatePIN(pin) {
  let n = pin.length;
  if (n != 4 && n != 6)
    return false;
  for (var i in pin)
    if (pin[i] > '9' || pin[i] < '0')
      return false;
  return true;
};

// control

console.log(validatePIN(pin));
