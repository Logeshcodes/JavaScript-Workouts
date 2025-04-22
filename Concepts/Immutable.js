

let str = 'Hello'

str = 'Hi'                          // You're replacing the entire string with a new one ('Hi').
                                    // 'Hello' remains unchanged somewhere in memory — it’s just no longer referenced by str.

console.log(str)



// ============================

let str2 = 'Hello'

str2[0] = 'y'

console.log(str2)