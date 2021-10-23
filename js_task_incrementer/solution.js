const arr = [4, 6, 7, 1, 3];

function incrementer(nums) {
  return nums.map((x, i) => {
    let num = x + (i + 1);

    if (num.toString().length >= 2) {
      return +num.toString().split('').reverse()[0];
    }

    return num;
  });
};

console.log(incrementer(arr));
