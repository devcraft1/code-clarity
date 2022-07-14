class Stack {
    constructor() {
        this.list = [];
    }

    add(value) {
        this.list.push(value)
    }
    show() {
        return this.list
    }
    remove() {
        return this.list.pop()
    }

    isEmpty() {
        return this.list.length === 0
    }
}

const newStack = new Stack()

newStack.add(12)
newStack.add('love')
newStack.add(12)
console.log(newStack.show())
console.log(newStack.remove())
console.log(newStack.isEmpty())