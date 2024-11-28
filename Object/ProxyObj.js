
// Proxy is an object that allows you to intrecept and customize the behavior of another object(target object) ;

const target = {
    message : 'Hello'
}

const handler = {

    get : function (target , property){

        return property in target ? target[property] : `property ${property} does not exist`
    }
}

const proxy = new Proxy(target , handler)

console.log(proxy.message)
console.log(proxy.age)