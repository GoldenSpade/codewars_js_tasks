const buildList = async (url, className) => {
  try {
    const res = await fetch(url)
    const json = await res.json()

    const keys = Object.keys(json.data.stats)
    const values = Object.values(json.data.stats)

    const newUl = document.createElement('ul')

    values.forEach((el, idx) => {
      let newLi = document.createElement('li')

      newUl.classList.add(className)
      newLi.classList.add(`${className}__item`)

      app.appendChild(newUl)
      newUl.appendChild(newLi)

      newLi.innerHTML = `${idx + 1}. ${keys[idx]}: ${el}`
    })
  } catch (err) {
    console.log(err)
  }
}

buildList('https://russianwarship.rip/api/v2/statistics/latest', 'posts')
