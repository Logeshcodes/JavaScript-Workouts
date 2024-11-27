// Deep copy 

// To create a entire independent copy of object 

// If we change anything in copy doesnt affect original and vice versa .


const obj = {
    name : 'Alice',
    age : 23,
    address :{
        city : 'chennai'
    }
}

const deepCopy = JSON.parse(JSON.stringify(obj))

deepCopy.address.city = 'Trichy'

console.log(obj)
console.log(deepCopy)


// const _ = require('lodash')

// const copy = _.cloneDeep(obj)

// console.log(copy)