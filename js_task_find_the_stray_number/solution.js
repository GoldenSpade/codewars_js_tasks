const array = [17, 17, 3, 17, 17, 17, 17];

function stray(numbers) {
  return numbers.filter((x) =>
    numbers.indexOf(x) === numbers.lastIndexOf(x))[0];
}

console.log(stray(arr));
