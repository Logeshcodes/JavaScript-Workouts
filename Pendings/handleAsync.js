let p1 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve('p1 pass')
    })
})
let p2 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve('p2 fail')
    })
})

async function getData(){

    let res = await p1
    console.log(res)
    let res1 = await p2
    console.log(res1)
    
}

getData()