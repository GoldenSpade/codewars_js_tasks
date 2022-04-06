const str = "CodEWaRs";

let capitals = (word) => {
  let res = [];

  [...word].forEach((letter) => {
    if (letter === letter.toUpperCase()) {
      res.push(word.indexOf(letter));
    }
  });
  return res;
};

console.log(capitals(str));
