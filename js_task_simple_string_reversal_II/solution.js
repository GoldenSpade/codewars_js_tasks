// input data

const str = 'codewars';

// solution

function solve(st, a, b) {
  return st.slice(0, a) +
    st.slice(a, b + 1).split('')
    .reverse()
    .join('') +
    st.slice(b + 1, st.length)
};

// control

console.log(solve(str, 1, 5));
