
function secondLargest(arr){
    
    
    let [largest , secondLargest] = arr.reduce(([largest , secondLargest] , num )=>{
    
    if(largest < num){
        return [num , largest] ;
        
    }else if(secondLargest  < num && num < largest){
        return [largest , num ]
    }
    
    return [largest , secondLargest] ;
    
    }, [-Infinity , -Infinity]) ;

    return secondLargest ;

}

let arr = [1,2,3,34,5,56] ;



console.log(secondLargest(arr))





