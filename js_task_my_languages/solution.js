const languages = {
  "Hindi": 60,
  "Greek": 100,
  "Dutch": 93
};

function myLanguages(obj) {
  const objSorted = {};
  const result = [];

  const keys = Object.keys(obj);
  const values = Object.values(obj);

  values.sort((a, b) => b - a);

  values.map((x) => {
    for (let key in obj) {
      if (obj[key] === x) {
        objSorted[key] = obj[key];
      };
    };
  });

  for (let key in objSorted) {
    if (obj[key] >= 60) {
      result.push(key);
    };
  };

  return result;
};

console.log(myLanguages(languages));
