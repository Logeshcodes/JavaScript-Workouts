
// Function statement (Function Declaration)

// Function Expression

// Arrow function 

// Anonymous function

// Async function 




// 1 ) Function statement or Function Declaration                                    Hoisted   |   concise    |  reuse    | 

// Named function using function keyword 


function add(a, b){                                                                // yes       |   No         |   yes      | 
    return a + b ;
}
console.log(add(1,2))





// 2 ) Function Expression => Assign to a variable                                   // no        |    yes       |   yes      | 


var sum = function (a, b){
    return a + b ;
}

console.log(sum(1 ,2))




// 3 ) Arrow function 

// Es6 feature ,  

//shorter syntex of function expression 

// They don't have a own (this) content. Automatically this content bind with the surrounding scope 

// Implicit return 

const concat = (a , b) => a+b ;
console.log(concat(1,2))


// callback Function

function end(){
    console.log('Callback...')
}

function start(a , end){
    console.log(a)
    end()
}

start(5 , end)



// Anonymous function 

// function without a name , often used in callbacks or one-time use .

setTimeout( function (){
    console.log('Timer')
},1000)




// Async function = its return a promise 


async function fetchData() {
    const response = await fetch("https://pastebin.com/raw/u45NJChf?__cf_chl_tk=qhBeiSFs0wJfYldeSFN8Grd0dPHv9CS6iqTP3_lams4-1732010167-1.0.1.1-1C4YsEcqEugRRHrfQDVDMpgrGoZe82Ih_z3kulW5Z1Q");
    // console.log(response);
    const data = await  response.json()
    console.log(data);
    
    // return response.json();

}

fetchData()



//          Normal function                           =                Arrow function (ES6)


//        use function keyword                                     without function keyword

//          own this context                                        don't have own this context

//          explicit return                                            implicit return 

//          make Constructor                                             Not allowed

//             Hoisted                                                   Not Hosited