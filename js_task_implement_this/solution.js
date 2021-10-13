const a = [1, 2, 3, 4, 5];

Array.prototype.multiply = function () {
  return this.concat(this.map((x) => Math.pow(x, 2)));
};

console.log(a.multiply());
