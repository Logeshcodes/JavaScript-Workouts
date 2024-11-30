const p1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Resolve will printed...")
    },2000)
})

const p2= new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Resolve will printed...2 ")
    },4000)
})

async function getData(){

    console.log("hello world...")

    var res = await p1;
    console.log("line 1 ")
    console.log(res)

    var res2 = await p2;
    console.log("line 2 ")
    console.log(res2)

}


getData()