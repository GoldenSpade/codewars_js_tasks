// input data

const arr = ["200G", "300G", "150G", "100KG"];

// solution

function arrange(arr) {

  return arr.sort((a, b) => {
    let grams_a = getFactor(a) * parseInt(a)
    let grams_b = getFactor(b) * parseInt(b)

    return grams_a - grams_b
  })
}

const getFactor = (str) => {
  if (str.includes("KG")) return 1000
  if (str.includes("G")) return 1
  if (str.includes("T")) return 1000 * 1000
}

// control

console.log(arrange(arr));
