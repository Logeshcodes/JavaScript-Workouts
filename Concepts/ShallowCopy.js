
// shallow copy = create a new obj or arr with same reference in the memory location.

// Top-level properties are copied .

// while nested properties , they still have a referenece



const obj = {
    name : 'Alice',
    age : 23,
    address :{
        city : 'chennai'
    }
}

// Two ways to create shallow copy : Using spread operator 

const shallowCopy = {...obj}

shallowCopy.address.city = 'Trichy'
shallowCopy.name = 'Logesh'

console.log(obj)
console.log(shallowCopy)


// using Object.assign

const shallowCopy2 = Object.assign({} , obj);

console.log(shallowCopy2)
