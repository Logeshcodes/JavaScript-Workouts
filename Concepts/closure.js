// closure - function that retains the lexical scope even after outer function execution finish .

function a(){

    let num = 5 ;

    function b(){
        console.log(num)
    }
    return b ;
}

let fun = a()

fun()

// Adv :  encapsulation / Data Privacy
// DisAdv  : Memory Leaks 