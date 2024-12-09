function camelCase(str){
    
    return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1) + " ")
    .join('')
}

let str = 'this is a logesh'

console.log(camelCase(str))