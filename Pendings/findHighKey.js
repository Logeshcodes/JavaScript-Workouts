
let obj = {a : 1 , b : 2 , c : 3}


let res = Object.entries(obj).sort((a,b) => b[1]-a[1])

console.log(res[0][0])



// another way

let max = 0
let key = ''

for(let i in obj){

    if(max < obj[i]){

        max = obj[i]
        key = i ;
    }
}

console.log(key)