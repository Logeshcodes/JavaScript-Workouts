// In js everything have a prototype like 

// object  - seal , freeze
// number  - tofixed(2) , toString 
//  array - push , pop
// promise - then , catch
// map - set , get , has
// set - add , delete
// date - toDateString 


function Person(name){
    this.name = name  ;
}

Person.prototype.greet = function (){
    console.log(`hello ,${this.name}`)
}

let person1 = new Person('Logesh')

person1.greet()


// prototype - sharing methods and properties via prototype chaining , through that inheritance happens.

// prototype pollution - attacker may modify the built-in objects like ,

Object.prototype.isAdmin = 'true';

let user = {} ;

console.log(user.isAdmin);



// Boxing -> primitives to wrapper obj (for accessing methods) =>  number to string 

let a = 10 ;

let b = a.toString()

console.log(typeof b)

// unboxing -> wrapper obj to primitives (for calculation) => object to number

let num = new Number(2)

num += 2 ;

console.log(typeof num)