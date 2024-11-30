const process = require('process');

console.log("first line....")

setImmediate(()=>{
    console.log("setim")
})


process.nextTick(() => {
  console.log('Executed in the next iteration');
});

console.log("second line....")

console.log("third line....")



console.log('Executed in the current iteration');

for(let i=0;i<=100;i++){
    console.log(i)
}