class Nodes {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const obj = { value: value, next: null }
        if (this.head) {
            this.head = value;
        }
    }

    prepend() {

    }

    find({ x }) {
        return x
    }

    remove() {

    }

}

const change = new Nodes()
console.log(change.find())
