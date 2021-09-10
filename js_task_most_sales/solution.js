const products = ["Computer", "Cell Phones", "Vacuum Cleaner"];const amounts = [3, 24, 8];
const prices = [199, 299, 399];


function top3(products, amounts, prices) {
  const all = products.map((_, i) => {
    return {
      name: products[i],
      val: amounts[i] * prices[i],
      idx: i
    };
  });

  all.sort((a, b) => {
    const d = b.val - a.val;
    if (d === 0) return a.idx - b.idx;
    return d;
  });

  return all.slice(0, 3).map(o => o.name);
}

console.log(top3(products, amounts, prices));
