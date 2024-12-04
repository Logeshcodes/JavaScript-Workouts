let arr = [1 ,22, 3, 4, 56, 5];


let res = arr.reduce(( [largest , second] , curr) =>{
   
   if(largest < curr){
       return [curr , largest]
   }else if(second < curr && curr < largest){
       return [largest , curr]
   }
   
   return [largest , second] ;
   
   
}, [-Infinity , -Infinity])


console.log(res[1])