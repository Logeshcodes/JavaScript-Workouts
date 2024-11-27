
// Prototype is an object , that exists in every js object.

// constructor function 

function Person(name){
    this.name = name ;
}

Person.prototype.greet = function (){
    console.log(`hello, ${this.name}`)
}

let person1 = new Person('John')

person1.greet()

// check 

