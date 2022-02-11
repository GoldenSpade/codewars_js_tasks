const str = 'codewars';

function scrollingText(text) {
  const arr = [...text];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let arr1 = [...arr].splice(0, i);
    let arr2 = [...arr].splice(i, arr.length);

    arr2.push(arr1);

    res.push([].concat(...arr2).join('').toUpperCase());
  };
  return res;
};

console.log(scrollingText(str));
