// input data

const obj = {
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
};

const arr = ['Lucas', 'Bill'];

// solution

function killer(obj, arr) {
  for (const key in obj){
    let same = 0;
    for(let i = 0;i<arr.length;i++){
      if(obj[key].includes(arr[i])){
        same++
      }
       if(same === arr.length){
         return key
       }
    }
  }
};

// control

console.log(killer(obj, arr));
