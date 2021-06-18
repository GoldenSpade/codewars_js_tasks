const input = ['O', 'X', 'X', 'X', 'X'];

// solution

function meeting(x){
  let isEmpty = x.indexOf('O');
  
  if (isEmpty === -1) {
    return 'None available!';
  }
  return isEmpty;
}

// control

console.log(meeting(input));
