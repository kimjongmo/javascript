let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(_age){
    if(typeof _age ==='number'){
      this._age = _age;
      console.log(`_age setting ${_age}`);
    }else{
      console.log('Invalid input');
    }
  },
  
  get age(){
    return `${this._name} is ${this._age} years old.`;
  }

};

person.age = 26;

console.log(person.age);
