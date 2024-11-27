
// Freeze : No add , No remove , No update

const obj = {
    name : 'Alice',
    age : 23,
    address :{
        city : 'chennai'
    }
}

Object.freeze(obj)

obj.age = 22 ;
obj.degree = 'Btech'

console.log(obj)

// check

console.log(Object.isFrozen(obj))