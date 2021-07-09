// input data

const arr = [0, 1, 2, 3, 4, 5, 6, 1, 7, 8];

// solution

function duplicateSandwich(a) {
  for(let i = 0; i < a.length - 1; i++)
    if(a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
      return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}

// control

console.log(duplicateSandwich(arr));
 