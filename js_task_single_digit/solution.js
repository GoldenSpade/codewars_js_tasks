const num = 5500011;

function singleDigit(n) {
  if (n < 10) return n

  const bits_count = countBits(n)

  if (bits_count > 9)
    return singleDigit(bits_count)

  return bits_count
}

const countBits = (n) => {
  let count = 0

  while (n) {
    count += n & 1
    n >>= 1
  }
  return count
}

console.log(singleDigit(num));
