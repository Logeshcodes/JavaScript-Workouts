
// All of them returns a array 

const obj = { a: 1, b: 2, c: 3 } ;

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


//except

console.log(Object.hasOwn(obj , 'a'))
console.log(Object.hasOwn(obj , 'z'))

// convert arr(key , value) to obj 

let arr = [['a', 1] , ['b', 2]]

console.log(Object.fromEntries(arr))



// campare handle both case differently 

console.log(Object.is(0 , -0))
console.log(Object.is(NaN , NaN))


