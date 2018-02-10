let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(_age){
    if(typeof _age ==='number'){
      this._age = _age;
    }else{
      return 'Invalid input';
    }
  }

};

/*
Getter and setter methods get and set the properties inside of an object. 
*/
