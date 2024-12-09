function LongWord(str){

    let splitArr = str.split(' ')

    let max = 0
    let word = ''

    for(let i of splitArr){
        if(max < i.length){
            max = i.length
            word = i 
        }
    }

    console.log(max)
    console.log(word)

}


let str = 'This is a Logesh'

// LongWord(str)



function UseReduce(str){

    let splitArr = str.split(' ');

    const long = splitArr.reduce(( curr , longest)=>{

       return longest.length < curr.length ? curr : longest
    }, '')

    console.log(long)

}

UseReduce(str)