
// seal : No delete , No add , only updates the existing field 

const obj = {
    name : 'Alice',
    age : 23,
    address :{
        city : 'chennai'
    }
}


Object.seal(obj)

obj.age = 22 ;
obj.degree = 'Btech'

console.log(obj)

// check 

console.log(Object.isSealed(obj))