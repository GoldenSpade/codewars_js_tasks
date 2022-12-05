function addRandomBg(domElem) {
  const targetElem = document.querySelector(domElem);

  const r = Math.floor(Math.random() * 256).toString(16);
  const g = Math.floor(Math.random() * 256).toString(16);
  const b = Math.floor(Math.random() * 256).toString(16);

  let color = `#${r}${g}${b}`

  if(color.length < 7) {
    color = `#${r}${g}${b}${Math.floor(Math.random() * 10)}`;
  }
  
  targetElem.style.backgroundColor = color;
}

addRandomBg('.title');
addRandomBg('.subtitle');
addRandomBg('.button');
addRandomBg('body');
