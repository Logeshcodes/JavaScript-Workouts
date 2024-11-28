
// Prototype chaining is an mechanism by which inheritance works 

function Person(name){
    this.name = name ;
}

Person.prototype.greet = function (){
    return `hello, ${this.name}` 
}

let person1 = new Person('John')

// person1 check in Person

// if not found , search in Person prototype 

// If still not found, it looks in Object.Prototype

// Then chain ends will null.