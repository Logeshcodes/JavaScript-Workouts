function binarysearch(arr , target){
    
    let start = 0 ; 
    let end = arr.length-1 ;
    let mid = Math.floor((start+end)/2)
    
    while(end > start){
        
        if(arr[mid] === target) return mid ;
        
        else if(arr[mid] < target){
            start = mid + 1
        }else if(arr[mid] < target){
            end = mid -1
        }
        
    }
    return -1 ;
}

let arr = [1,2,3,4,5,6,7]
let target = 6

console.log(binarysearch(arr , target))