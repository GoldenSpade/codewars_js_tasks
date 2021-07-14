// solution

class Person {
  
  constructor(name) {
    this.name = name;
  }
 
  greet(name) {
    return `Hello ${name}, my name is ${this.name}`;
  }

}

// input data

const user = new Person('Misha');

// control

console.log(user.greet('Anna'));
