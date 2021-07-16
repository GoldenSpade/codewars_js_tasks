// input data

const arr = [10, 20, 3, 30, 5, 4];
const number = 3;

// solution

function sumOrProduct(array, n) {
  const sortedMax = [...array].sort((a, b) => b - a).slice(0, n);
  const sortedMin = [...array].sort((a, b) => a - b).slice(0, n);

  const sumOfMax = sortedMax.reduce((a, b) => a + b);
  const multOfMin = sortedMin.reduce((a, b) => a * b);
  
  if (sumOfMax === multOfMin) {
    return 'same';
  }

  if (sumOfMax > multOfMin) {
    return 'sum';
  } else {
    return 'product';
  }
}

// control

console.log(sumOrProduct(arr, number));
