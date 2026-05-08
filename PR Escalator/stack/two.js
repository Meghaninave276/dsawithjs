class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);

        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) {
            return "Stack is empty";
        }

        let removed = this.top.data;
        this.top = this.top.next;

        return removed;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.top === null;
    }
}

// Example
const stackLL = new StackLinkedList();

stackLL.push(5);
stackLL.push(10);
stackLL.push(15);

console.log(stackLL.pop());
console.log(stackLL.peek());