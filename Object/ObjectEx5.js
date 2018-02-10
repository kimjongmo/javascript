const person ={
  name : 'mojong',
  age : 26,
};
person['hobbies']=['Singing','Watching Movie'];

person.hobbies = ['Game'];

console.log(person.hobbies);

/*
In the same way that we added a property to an object, we can modify a key's value.
*/