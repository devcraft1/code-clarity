/* properties 

1. Unordered key value pairs
2. Element access via key(property name)
3. Keys have to be strings, numbers or symbols
4. Not iterable
5. Keys are unique - values are not
6. Can store data and functionality(methods)

*/
const object = {
    name: "dennis",
    age: 12,
    symbol: true,
    array: [1, 2, "array"],
    functionCall: () => {
        (() => { console.log('invoked') })()
    }
}

// for in loop 
for (let obj in object) {
    console.log(obj)
}

// delete from an object
const remove = delete object.name

// add to an object
const add = object.greet = () => { console.log("x") }
const changeValue = object.name = "steve"

// call method
const invoke = object.functionCall()

console.log(invoke)
console.log(object.array)
console.log(object)






