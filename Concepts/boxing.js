// Boxing: Primitive → Wrapper Object (for accessing methods/properties)

let a = 2 ;

console.log(typeof a)

let b = a.toString()

console.log(typeof b)

// Unboxing: Wrapper Object → Primitive (for calculations or other operations)

let num = new Number(2)

console.log(typeof num)

num += 2 ;

console.log(typeof num)

