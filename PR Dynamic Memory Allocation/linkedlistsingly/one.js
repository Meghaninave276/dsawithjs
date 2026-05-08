class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;

        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

let reversed = reverseLinkedList(head);

while (reversed) {
    console.log(reversed.data);
    reversed = reversed.next;
}