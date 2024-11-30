let p1 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        reject('p1 fail')
    },2000)
})
let p2 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        reject('p2 fail')
    },3000)
})
let p3 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve('p3 pass')
    },2000)
})

Promise.any([p1, p2, p3])
.then((res)=> console.log(res))
.catch((error)=> console.log(error))