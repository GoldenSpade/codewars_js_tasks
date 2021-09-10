const array = ['THE EYES', 'they see'];

function letterCheck(arr) {

  [str1, str2] = arr;

  const arr1 = [...str1.toLowerCase()];
  const arr2 = [...str2.toLowerCase()];

  let count = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      count++;
    };
  };

  return arr2.length === count;
};

console.log(letterCheck(array));
