// input data

const arr = [-14, 1, -5, 1, 4, 1, -6, 1, -4, 1, 13, 1, 7, 1];

// solution

function stantonMeasure(x) {
  let n = 0;
  let stanton = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 1) {
        n++
      } 
    }
  
    for (let j= 0; j< x.length; j++) {
      if (x[j] === n) {
        stanton++
      }
    }
    return stanton;
  }

// control

console.log(stantonMeasure(arr));
