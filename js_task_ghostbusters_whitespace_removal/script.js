const str = "O  f fi ce";

const ghostBusters = (building) => {
  const arr = building.split("");
  const flag = arr.some((x) => x === " ");

  if (!flag) {
    return "You just wanted my autograph didn't you?";
  } else {
    return building.split(" ").join("");
  }
};

console.log(ghostBusters(str));
