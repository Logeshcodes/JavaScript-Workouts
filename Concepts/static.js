class Example{

    static classProperty = 'Class properties'

    constructor(value){
        this.instanceProperty = value ;
    }
}

let obj1 = new Example('unique for obj1')
let obj2 = new Example('unique for obj2')

console.log(Example.classProperty);
console.log(obj1.instanceProperty);
console.log(obj2.instanceProperty);
