const str = ".tree1";

function removeChars(s) {
  return s.replace(/[^a-z ]/ig, "")
}

console.log(removeChars(str));
