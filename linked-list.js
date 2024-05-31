class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // add a new node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    // add a new node to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        if (this.head) {
            newNode.nextNode = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    // insert a new node at the given index
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const listSize = this.size();
        if (index >= listSize) {
            this.append(value);
            return;
        }
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        const newNode = new Node(value);
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;

    }

    // return total number of nodes in the list
    size() {
        let listLength = 0;
        let currentNode = this.head;
        while (currentNode) {
            listLength++;
            currentNode = currentNode.nextNode;
        }
        return listLength;
    }

    // return first node in the list
    getHead() {
        return this.head;
    }

    // return last node in the list
    getTail() {
        return this.tail;
    }

    // return node at the given index
    at(index) {
        if (index < 0) return null;
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentIndex === index) return currentNode;
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    // remove last element from the list
    pop() {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        let currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.tail = currentNode;
    }

    // remove the node at the given index
    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.nextNode;
            if (!this.head) this.tail = null;
            return;
        }
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            if (!currentNode.nextNode) return;
            currentNode = currentNode.nextNode;
        }
        const nodeToRemove = currentNode.nextNode;
        if (!nodeToRemove) return;
        currentNode.nextNode = nodeToRemove.nextNode;
        if (!currentNode.nextNode) {
            this.tail = currentNode;
        }
    }

    // return true if the passed value is in the list, otherwise return false
    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    // return the index of the node containing given value, return null if not found
    find(value) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return currentIndex;
            currentIndex++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    // print the elements of the list '( value ) -> ( value ) -> ( value ) -> null'
    toString() {
        let outputPrint = "";
        let currentNode = this.head;
        while (currentNode) {
            outputPrint += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        outputPrint += 'null';
        console.log(outputPrint);
    }
}

let linkedList = new LinkedList();
for (let i = 0; i < 15; i++) {
    linkedList.append(i);
}
linkedList.prepend('text');
linkedList.removeAt(2);
linkedList.toString();

linkedList.pop();
linkedList.insertAt('new value', 1);
linkedList.toString();

console.log("Contains given value:", linkedList.contains(10));
console.log("Find value's index: ", linkedList.find(10));
console.log("Node at given index:", linkedList.at(1));
console.log("List head:", linkedList.getHead());
console.log("List tail:", linkedList.getTail());
console.log("List size:", linkedList.size());
