// input data

const arr = [1, 2, 3, 4, 5];

// solution

function averages(arr) {
  const result = [];
  
  if (arr === null || arr.length <= 1) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    let exp = (arr[i] + arr[i + 1]) / 2;
    if (!isNaN(exp)) {
      result.push(exp)
    }
  }
  return result;
}

// control

console.log(averages(arr));
