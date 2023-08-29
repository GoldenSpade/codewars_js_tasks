const from = 0
const to = 1

const rangeBitCount = (a, b) => {
  const arr = []

  for (let i = a; i <= b; i++) {
    arr.push(i)
  }

  return arr
    .map(el =>
      el
        .toString(2)
        .split('')
        .reduce((a, b) => +a + +b)
    )
    .reduce((a, b) => +a + +b)
}

console.log(rangeBitCount(from, to))
