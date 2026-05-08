class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function insertAtBeginning(head, data) {
    let newNode = new Node(data);

    newNode.next = head;

    if (head !== null) {
        head.prev = newNode;
    }

    return newNode;
}


let head = new Node(20);
head = insertAtBeginning(head, 10);

while (head !== null) {
    console.log(head.data);
    head = head.next;
}