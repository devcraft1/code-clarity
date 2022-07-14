class Nodes {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null }
        if (this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode
        if (!this.head) {
            this.head = newNode
        }
    }
    addToArray() {
        const elements = []
        let curNode = this.tail;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements

    }
}

const linkedList = new Nodes()
linkedList.append("yes")
linkedList.append(true)
linkedList.append(12)
linkedList.append("yes")
linkedList.append(true)
console.log(linkedList.addToArray())