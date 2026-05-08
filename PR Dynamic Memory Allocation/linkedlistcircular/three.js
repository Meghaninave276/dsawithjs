class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function traverse(head) {

    if (head === null) {
        return;
    }

    let current = head;

    do {
        console.log(current.data);
        current = current.next;
    } while (current !== head);
}


let head2 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

head2.next = node2;
node2.next = node3;
node3.next = head2;

traverse(head2);