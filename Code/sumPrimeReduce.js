
function isPrime(n){

    for(let i=2;i*i< n ; i++){

        if(n%i === 0){
            return false ;
        }
    }
    return true ;
}

let arr = [ 20 , 30 , 71 , 79] ;

let res = arr.filter(isPrime).reduce( (acc , curr) => acc+curr , 0)

console.log(res)