
// Function Borrowing Technic

// Used where the function belongs to one object , it can use by any another object.

// Using call , apply , bind => To explicitly set the (this) context of the function.




// First Object have a function

const person1 = {
    firstName : 'Alice',
    lastName : 'Bob',
    greeting  : function (greet){
        console.log(`${greet} , ${this.firstName} ${this.lastName}`) ;
    }
}

// Another object 

const person2 = { 
    firstName : 'Abin',
    lastName : 'Babu'
}

// function belongs to person1 (obj) can be used by another person2 (obj2)


// => using call() - immediately invoked function 

person1.greeting.call(person2, 'Hello')  // Hello , Abin Babu


// => using apply() - immediately invoked function  , accept input as a Array

person1.greeting.apply(person2 , ['Hello']) // Hello , Abin Babu

// => using bind() - Not immediately invoked function , assign to variable then call that 

var show = person1.greeting.bind(person2 , 'Hello')

show()





// Adv : Reusability , Efficient memory usage , Dynamic context binding 




// usage : When need to use function temporarily

//       : if wants long term use inheritance 