let obj = {
    fname : 'Abin',
    lname : 'Babu',
    address : {
        street : 'West street',
        pincode : 622121,
        post : 'Thogaimalai'
        
    }
}


function deepFreeze(obj){

    Object.freeze(obj);


    Object.keys(obj).forEach( key => {

        if(typeof obj[key]  === 'object' &&  obj[key] !== null && !Object.isFrozen(obj[key])){
            deepFreeze(obj[key])
        }
    })

    return obj
}

deepFreeze(obj)


obj.address.pincode = "000000";

console.log(obj)