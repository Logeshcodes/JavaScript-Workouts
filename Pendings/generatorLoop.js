
function* generator(){

    for(let i=5 ; i<= 100 ; i+=5){
        yield i ;
    }
}

let  gen  = generator();

for(let i of gen ){
    console.log(i)
}