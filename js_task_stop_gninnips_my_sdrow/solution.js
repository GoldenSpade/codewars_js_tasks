const str = "Hey fellow warriors";

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      let wordArr = word.split("");

      if (wordArr.length >= 5) {
        wordArr.reverse();
        return wordArr.join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(spinWords(str));
