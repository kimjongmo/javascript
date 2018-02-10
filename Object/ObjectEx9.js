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

const friend ={
  name : 'coa'
};

friend.sayHello = person.sayHello;

console.log(friend.sayHello());


/*
this is a great way to make objects more flexible.
*/