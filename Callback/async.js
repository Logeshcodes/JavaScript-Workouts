
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

function getOrderDetails(id){

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve({product : "loptop" , price : 100000})
        },2000)
    })
}

async function process(){

    try{


        let user = await getUser(1)
        console.log(user)

        let order = await getOrder(1)
        console.log(order)

        let orderDetails = await getOrderDetails(1)
        console.log(orderDetails)

    }catch(err){
        console.log(err)
    }
}

process()