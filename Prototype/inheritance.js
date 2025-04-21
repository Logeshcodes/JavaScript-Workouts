// prototype inheritance is an ability to inherit methods and properties via their prototype chaining

function Person(name){
    this.name = name ;
}

Person.prototype.greet = function (){
    return `hello, ${this.name}` 
}

let person1 = new Person('John')

console.log(person1.greet())
// person1 inherits the greet method from Person.prototype.