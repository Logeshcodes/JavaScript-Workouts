
// Generator function :  Special type of function 

// pause and resume the function using yield & next ;



//  1) function* declaration   2) yield  3) itertor (next)

function* generator(){

    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// Adv : =>  Lazy evaluation : values are generated when we needed, its saves the memory and improve performance.

function* generator2(){

    for(let i=5;i<=100 ; i+=5){
        yield i ;
    }
}

const gen2 = generator2()

for(let i of gen2){
    console.log(i)
}

