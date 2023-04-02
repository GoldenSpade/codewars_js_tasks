const someStr = 'Cod'
const value = 2

function trim (str, val) {
  if (str.length <= val) {
    return str
  }

  if (val <= 3) {
    return `${str.slice(0, val)}...`
  }
  return `${str.slice(0, val - 3)}...`
}

console.log(trim(someStr, value))
