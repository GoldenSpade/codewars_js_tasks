const str = "apple of banana";

function dropCap(word) {
  let res = word.split(" ").map((word) => {
    let lowerWord = word.toLowerCase();

    if (word.length > 2) {
      return lowerWord[0].toUpperCase() + lowerWord.substr(1, word.length);
    } else {
      return word;
    }
  });

  return res.join(" ");
}

console.log(dropCap(str));
