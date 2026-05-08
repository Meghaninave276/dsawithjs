class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isCircular(head) {

    if (head === null) {
        return false;
    }

    let current = head.next;

    while (current !== null && current !== head) {
        current = current.next;
    }

    return current === head;
}

// Example
let head4 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);

head4.next = n2;
n2.next = n3;
n3.next = head4;

console.log(isCircular(head4));