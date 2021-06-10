// input data

const poem = 'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.';

// solution

function formatPoem(poem) {
  return poem.split(". ").join(".\n");
}

// control

console.log(formatPoem(poem));
