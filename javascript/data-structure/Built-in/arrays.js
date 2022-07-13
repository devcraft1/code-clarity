/* properties 

1. Insertion order is kept 
2. Element access via index
3. Deletion and finding elements can require extra work
4. iterable( for -of loop)
5. Size(length) adjusts dynamically
6. Duplicate values are allowed

*/

const array = ['set', "map", "object", "array"]

// Array methods 
array.push("others")
array.pop()
array.shift()
array.unshift("welcome")

// for -of loop 
for (let x of array) {
    console.log(x[i])
}

// find array index 
const findX = array.findIndex(x => {
    const y = x[0] === "set" ? true : false
    console.log(y)
})