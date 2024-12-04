let obj = {
    name : 'Logesh',
    age : 23 ,
    greet : function(msg){
        console.log(`${msg} ${this.name} , my age is ${this.age}` )
    }
}

let person ={
    name : 'Logu',
    age : 24
}

let res = obj.greet.bind(person, 'Hello')

res()