
// Functional programming Technic

// Transform a function with multiple arguments in the series of function , each function taking a single argument

// Doesn't immediately invokes , it delays utill all the arguments are provided.

function addThree(a){
    return function (b){
        return function (c){
            return a+b+c ;
        }
    }
}

console.log(addThree(1)(2)(3))   // 6



// ====>       Adv :  Reusability  , Readability : break-down complex function into smaller function.

const greet = (greeting) => (name) => `${greeting} , ${name}`;

const sayHello = greet('Hello');

console.log(sayHello('Alice'))   //    Hello , Alice
console.log(sayHello('Bob'))     //    Hello , Bob

// ====>      Dis-Adv : Performance Overhead  : Each level it creates a new function which may leads to higher memory usage and slightly slow the execution.








// Real-Time Example:


function calculateTax(rate) {
    return function(amount) {
      return amount + amount * rate;
    };
  }
  
  const indiaTax = calculateTax(0.18);
  const usTax = calculateTax(0.07);
  
  console.log(indiaTax(100)); // 118
  console.log(usTax(100));    // 107
  