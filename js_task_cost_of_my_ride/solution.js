// solution

function insurance(age, size, numofdays) {
  if (numofdays <= 0) {
    return 0;
  } else {
    let num = 0;
    if (size === "economy") {
      num = 0;
    } else if (size === "medium") {
      num = 10;
    } else {
      num = 15;
    }
    if (age < 25) {
      return (numofdays * (10 + num + 50));
    } else {
      return (numofdays * (num + 50));
    }
  }
}

// control

console.log(insurance(18, "medium", 7));
