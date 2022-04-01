const input = "102269";

function explode(s) {
  let res = "";

  [...s]
    .map((x) => +x)
    .forEach((y) => {
      for (let i = 0; i < y; i++) {
        res += y;
      }
    });
  return res;
}

console.log(explode(input));
