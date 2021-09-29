const s = 'THE big PeOpLE Here!!';

function borrow(str){
  return str.replace(/[^0-9A-Za-z]+/gi, '')
    .toLowerCase();
}

console.log(borrow(s));
