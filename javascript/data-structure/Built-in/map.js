/* properties 

1. Ordered key value pairs
2. Element access via key
3. pure data storage - optimized for data access
4. iterable
5. keys are unique - values are not
*/

// create map 
const map = new Map()

map.set("boolean", true)
map.set("string", "string")
map.set("number", 123)

// create obj and add to map 
const setObject = { obj: "others", id: 1 }

// set object 
map.set(setObject.id, "all objects")

// for-of loop 
for (let x of map) {
    if (x) {
        console.log(x)
    } else {
        console.log("not rendered. Try using for-of loop")
    }

}

// get value 
const getValue = map.get("number")
console.log(getValue)

// delete value 
const remove = map.delete("setObject.id")
console.log(remove)









console.log(map)




