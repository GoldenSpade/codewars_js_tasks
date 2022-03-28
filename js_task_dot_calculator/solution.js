function dotCalculator(equation) {
  let a = 0;
  let b = 0;

  let res = 0;

  if (equation.includes(" + ")) {
    let allDots = equation.split(" + ").join("").split("");

    allDots.forEach((_, i) => (res = i + 1));
  } else if (equation.includes(" - ")) {
    let allDots = equation.split(" - ");

    allDots[0].split("").forEach((_, i) => (a = i + 1));
    allDots[1].split("").forEach((_, i) => (b = i + 1));

    res = a - b;
  } else if (equation.includes(" * ")) {
    let allDots = equation.split(" * ");

    allDots[0].split("").forEach((_, i) => (a = i + 1));
    allDots[1].split("").forEach((_, i) => (b = i + 1));

    res = a * b;
  } else if (equation.includes(" // ")) {
    let allDots = equation.split(" // ");

    allDots[0].split("").forEach((_, i) => (a = i + 1));

    allDots[1].split("").forEach((_, i) => (b = i + 1));

    res = a / b;
  }

  if (res < 1) {
    return "";
  }

  let dots = "";

  for (let i = 1; i <= res; i++) {
    dots += ".";
  }

  return dots;
}

console.log(dotCalculator("... - .."));
