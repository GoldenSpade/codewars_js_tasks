// input data

const url = 'http://www.exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html';

// solution

function getProductId(url) {
  return url.split('-').reverse()[1]
}

// control

console.log(getProductId(url));
