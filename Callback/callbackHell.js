function getUser(id , callback){

    setTimeout(()=>{
        console.log('Fetch user data')
        callback({name : "Alice"})
    },2000)
}

function getOrder(id , callback){

    setTimeout(()=>{
        console.log('Fetch order data')
        callback(['order1'])
    },2000)
}
function getOrderDetails(id, callback){

    setTimeout(()=>{
        console.log('Fetch orderdetails data')
        callback({product : 'laptop'})
    },2000)
}



getUser(1 , (user)=>{
    console.log(user);
    getOrder( 1 , (order)=>{
        console.log(order)
        getOrderDetails(1 , (orderDetails)=>{
            console.log(orderDetails);
            
        })
    })
})