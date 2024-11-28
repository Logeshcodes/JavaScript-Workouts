

function getUser(id){

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve({id: 1 , name : "logesh"})
        },2000)
    })
}

function getOrder(id){

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(['order1'])
        },2000)
    })
}

function getOrderDetails(orderDetails){

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve({product : "loptop" , price : 100000})
        },2000)
    })
}


getUser(1)

.then((user)=>{
    console.log(user)
    return getOrder(user.id)          // promise - give return for makes promise chaining 
    
})
.then((order)=>{
    console.log(order)
    return getOrderDetails(order)
    
})

.then((orderDetails)=>{
    console.log(orderDetails)
})

.catch((err)=>{
    console.log(err)
})