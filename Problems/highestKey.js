let obj = {a: 1 , b : 2 , c : 3}

let max = 0 ;
let index = ''

for(let i in obj){
    
    if(max < obj[i]){
        max = obj[i]
        index = i ;
    }
}

console.log(index)