const str = "abcdefg";
const arrStr = str.split("");

const array = [];

for (let i = 0; i <= arrStr.length; i += 2) {
  array.push(arrStr[i] + " " + arrStr[i + 1]);
}

const result = array.map((x) => {
  return x
    .split(" ")
    .map((y) => {
      if (y === "undefined") {
        return "_";
      } else {
        return y;
      }
    })
    .join("");
});

if (str.length % 2 === 0) {
  result.pop();
}

console.log(result);

// * 'abc' =>  ['ab', 'c_']
