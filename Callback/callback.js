
// Callback is an function passed as a argument to another function 

function greeting( name , Callback){

    console.log(`Hello, ${name}` );
    Callback()
}

function bye(){
    console.log('Goodboy')
}


greeting( 'Alice' , bye)


// Callback are used to do the async tasks.


console.log('start')

setTimeout(()=>{
    console.log('Timer')
},1000)

console.log('end')


// But, some dis-adv like  - inversion of control
//                         - callback hell


const cart = ['shoes' , 'shirt' , 'pant']  

api.createOrder(cart , function(){

    api.payment( function (){

        api.showOrderDetails( function(){                   // pyramid of doom - grows horizontal 

            api.updateWallet()
        })
    })
} )







