function add(a) {

  return function f2(b) {
    return a + b;
  }

}

console.log(sum(1)(3));
