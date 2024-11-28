
// Prototype is an object , that exists in every js object.

// It serves to shares the methods and properties among object 

// constructor function 

function Person(name){
    this.name = name ;
}

Person.prototype.greet = function (){
    return `hello, ${this.name}` 
}

let person1 = new Person('John')


console.log(Person.prototype === person1.__proto__)