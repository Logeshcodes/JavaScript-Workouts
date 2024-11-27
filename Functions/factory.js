
// factory function 

// return an object , without using new keyword or class.

// It alternative to using constructor and Es6 classes.



// Adv : encapsulation , No this context 

// Dis-adv : No prototype 

function createPerson(name , age){
    return {
        name,
        age ,
        greet(){
            return `Hello, ${name}`
        }
    }
}

const person = createPerson('Abin' ,23)

console.log(person.name)
console.log(person.greet())





// constructor function 


// create object using new keyword  , encapsulation , object creation 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person("John", 30);
console.log(john.name); // Output: John