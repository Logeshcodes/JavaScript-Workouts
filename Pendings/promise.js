let p1 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        reject('p1 fail')
    },1000)
})
let p2 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        reject('p2 fail')
    },2000)
})
let p3 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve('p3 pass')
    },3000)
})

Promise.race([p1 , p2 , p3])
.then(data => console.log(data))
.catch(err => console.log(err))
