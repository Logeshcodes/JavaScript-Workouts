let arr = [ 'a' , 'b' , 'c'] ;

let arr2 = []

const res = arr.map( i => {
    
    arr2.push(String.fromCharCode(i.charCodeAt() - 32))
    
})

console.log(arr2)
