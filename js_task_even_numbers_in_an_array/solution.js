const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;


function evenNumbers(array, number) {
  const result = [];
  
  const arrRev = array.filter((x) => x % 2 === 0).reverse();
  
  for (let i = 0; i < number; i++) {
    result.push(arrRev[i]);
  }
  
  return result.reverse();
}

console.log(evenNumbers(arr, num));
