// input data

const str = 'www.codewars.com/katas/?page=1#about';

// solution

function removeUrlAnchor(url){
  return url.split('#')[0];
}

// control

console.log(removeUrlAnchor(str));

