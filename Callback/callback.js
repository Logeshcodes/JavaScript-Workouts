// Callback is an function passed as a argument to another function 


// callback function => 1 ) Inversion of control  2 ) Callback hell

function task1(callback){

    setTimeout( ()=>{
        console.log('Task1 done');
        callback()
    }, 1000)
}
function task2(callback){

    setTimeout( ()=>{
        console.log('Task2 done');
        callback()
    }, 1000)
}
function task3(callback){

    setTimeout( ()=>{
        console.log('Task3 done');
        callback()
    }, 1000)
}



task1( ()=>{
    task2( ()=>{
        task3(()=>{
            console.log('All task done...')
        })
    })
})


