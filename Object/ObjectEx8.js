const person ={
  name : 'mojong',
  age : 26,
  sayHello(){
  	return `Hello, my name is ${this.name}`;
  },
  sayGoodbye(){
    return 'Goodbye!'
  }
};

console.log(person.sayHello());
console.log(person.sayGoodbye())
/*
to create methods that operate on the data inside of the same object.

Maybe..I think this is apply only ES6 method
*/