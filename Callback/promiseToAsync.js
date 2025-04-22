function task1(){
    return new Promise((resolve , reject) =>{

        setTimeout(() => {
            console.log('Task1 done')
            resolve()
        }, 1000);
    })
}
function task2(){
    return new Promise((resolve , reject) =>{

        setTimeout(() => {
            console.log('Task2 done')
            resolve()
        }, 1000);
    })
}
function task3(){
    return new Promise((resolve , reject) =>{

        setTimeout(() => {
            console.log('Task3 done')
            resolve()
        }, 1000);
    })
}


// task1()
// .then(task2)
// .then(task3)
// .then(()=>{
//     console.log('All Task done...')
// })
// .catch((err)=>{
//     console.log(err)
// })



async function showRes(){

    await task1();
    await task2();
    await task3();
    console.log('All task completed...')
}

showRes()