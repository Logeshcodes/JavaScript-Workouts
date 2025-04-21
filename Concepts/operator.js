
//super operators: 

// optional chaining :

const person = {
    fname : "Logesh",
    lname : "Kumar" ,
    address : {
        city : "Thogaimalai",
        pincode : 621313
    }
}

console.log(person?.address?.city)

// safely access deeply nested properties without throwing an error .




// nullish Coalescing :

const name = null ;

console.log(name ?? "Guest") // return the right-hand value only if left-hand value is null or undefined 

// difference with || ( or operator) :

const age = 0 ;

console.log(age || 18)
