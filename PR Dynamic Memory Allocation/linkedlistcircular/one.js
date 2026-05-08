class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNode(head, data) {
    let newNode = new Node(data);

    if (head === null) {
        newNode.next = newNode;
        return newNode;
    }

    let current = head;

   
    while (current.next !== head) {
        current = current.next;
    }

    current.next = newNode;
    newNode.next = head;

    return head;
}


let head = new Node(1);
head.next = head;

head = insertNode(head, 2);
head = insertNode(head, 3);

let temp = head;

do {
    console.log(temp.data);
    temp = temp.next;
} while (temp !== head);