let arr = [ 1 , 2 , ()=>{} , undefined , null , 4]


let sum = 0 ;

for(let i=0;i< arr.length ; i++){
    if(typeof arr[i] === 'number'){
        sum += arr[i]
    }
}

console.log(sum)