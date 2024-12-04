
let obj = {
    name : 'Logesh' ,
    age : 23 , 
    degree : 'Btech',
    address : {
        city : 'Chennai'
    }
}
// Object.seal(obj) ;
Object.freeze(obj) ;

obj.address.city = 'Trichy'

console.log(obj.address.city)



const deepCopy = JSON.parse(JSON.stringify(obj ), (key ,value)=>{

    if(value !== typeof('object') && value !== null){
        return Object.freeze(value) ;
    }
    return value
})

deepCopy.address.city = 'Bangalore'

console.log(deepCopy)


