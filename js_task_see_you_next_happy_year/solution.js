// input data

const year = 1001;

// solution

function nextHappyYear(year) {

  year++
  aux = 0;
  while (aux === 0) {
    arr = year.toString().split('')
    arr.sort()
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        aux = 0;
        year++;
        i = arr.length
      } else {
        aux = 1;
      }
    }
  }
  return year
}

// control

console.log(nextHappyYear(year));
