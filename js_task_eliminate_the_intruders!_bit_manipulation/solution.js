function eliminateUnsetBits (number) {
  return parseInt(number.replace(/0/gi, ''), 2) || 0
}

console.log(eliminateUnsetBits('11111111'))
