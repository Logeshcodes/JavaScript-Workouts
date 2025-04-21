const myMap = new Map();

myMap.set("name", "Alice");
myMap.set(1, "Number One");
myMap.set(true, "Boolean Value");

console.log(myMap.get("name")); 
console.log(myMap.size);                   


for( let i of myMap){
    console.log(i)
}

// maintain insertion order 
// Iterable 



const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, ignored
mySet.add("hello");

console.log(mySet.has(1));  
console.log(mySet.size);    

for(let i of mySet){
    console.log(i)
}

// store unique values 


//  Keys are only object in both weakset and weakMap 
//  weakly referenced..






// Feature    | Map            | Set | WeakMap | WeakSet


// Iterable   | ✅ Yes        | ✅ Yes | ❌ No | ❌ No



