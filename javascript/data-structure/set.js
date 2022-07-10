/* properties 

1. Insertion order is not stored/memorized
2. Element access via method
3. Deletion and finding elements is trivial aand fast
4. iterable( for -of loop)
5. Size(length) adjusts dynamically
6. Duplicate values are not allowed(ie unique values only)

*/


// create set 
const createSet = new Set()

createSet.add("string")
createSet.add(1)
createSet.add(1)

for (let x of createSet) {
    console.log(x)
}

// delete 
const remove = createSet.delete("string")
console.log(createSet)
