function findSum(){
  const arr = [...arguments];
  
  if(arr.length === 0) {
    return 0;
  }
  else if (arr.some((x) => x < 0)) {
    return -1;
  }
  else {
    return arr.reduce((a, b) => a + b);
  }
}

console.log(findSum(1, 2, 3, 4, 5, -2));
