const arr = [56, 96, 88, 38, -22, 52, 34, -62, -100, -24, 78, 38, -30, 38, -28, 78, -80, 28, 98, 14, -60, 80, 56, 91, 68, -36, -12, -32, -24, 42, 36, 18, 90];

function oddOne(arr) {
    return arr.indexOf(arr.filter((x) => x % 2 !== 0)[0]);
}

console.log(oddOne(arr));
