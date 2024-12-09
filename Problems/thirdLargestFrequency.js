let arr = [1 , 2 , 3 , 4 , 4, 5 , 5 , 5 , 6 , 6 , 6 , 6]

let obj = {} ;

for(let i=0;i< arr.length ; i++){
    
    if(!obj[arr[i]]){
        obj[arr[i]] = 1
    }else{
        obj[arr[i]]++ ;
    }
}

console.log(Object.entries(obj).sort((a,b) => b[0]- a[0])[2][1])