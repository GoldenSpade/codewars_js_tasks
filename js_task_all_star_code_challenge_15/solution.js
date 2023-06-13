function rotate(str){
  let res = [];
  let s = str;
  for(let i = 0; i < str.length;i++){
     s = s.slice(1) + s[0];
    res.push(s);    
  }
return res;
}

console.log(rotate('Hello'));
