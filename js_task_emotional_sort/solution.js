const inputData = [':D', ':|', ':)', ':(', ':D']

function sortEmotions (arr, order) {
  const arrOfObjs = []

  arr.forEach(el => {
    if (el === ':D') {
      arrOfObjs.push({
        symbol: el,
        number: 1
      })
    }
    if (el === ':)') {
      arrOfObjs.push({
        symbol: el,
        number: 2
      })
    }

    if (el === ':|') {
      arrOfObjs.push({
        symbol: el,
        number: 3
      })
    }
    if (el === ':(') {
      arrOfObjs.push({
        symbol: el,
        number: 4
      })
    }
    if (el === 'T_T') {
      arrOfObjs.push({
        symbol: el,
        number: 5
      })
    }
  })

  const res = []

  if (order) {
    arrOfObjs
      .sort((a, b) => a.number - b.number)
      .forEach(el => res.push(el.symbol))
  } else {
    arrOfObjs
      .sort((a, b) => b.number - a.number)
      .forEach(el => res.push(el.symbol))
  }

  return res
}

console.log(sortEmotions(inputData, true))
