const str = "yq0sams&bbdd@yundefinedyyqqq000ssaaammm&&&bb@@@uuunneefffiii";

function validateWord(s) {
  let str = s.toLowerCase().split("");

  let arr = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count = str.filter((el) => el == str[i]);
    arr.push(count.length);
  }

  return arr.every((el) => el == arr[0]);
}

console.log(validateWord(str));
