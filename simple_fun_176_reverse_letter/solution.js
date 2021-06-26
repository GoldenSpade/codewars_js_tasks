// input data

const str = 'wmas,yu!jt{ 4w0imglt#%^zotycmd6,5]ua}+^=m,';

// solution

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// control

console.log(reverseLetter(str));

