const str = "The sunset sets at twelve o' clock.";

function alphabetPosition(text) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  return text.split('')
              .map(x => alphabet.indexOf(x.toLowerCase())+1)
              .filter(idx => idx > 0)
              .join(' ');
}

console.log(alphabetPosition(str));
