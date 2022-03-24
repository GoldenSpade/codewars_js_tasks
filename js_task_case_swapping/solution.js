let input = 'sdsdKJKJ'

const swap = str => [...str].map(swapCase).join('') ;

const swapCase = str => 
  str === str.toUpperCase() ? 
    str.toLowerCase() : 
    str.toUpperCase();

console.log(swap(input));
