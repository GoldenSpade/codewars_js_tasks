const array = ["Ryan", "Kieran", "Mark"];

function friend(friends){
  return friends.filter((person) => person.length === 4);
}

console.log(friend(array));
