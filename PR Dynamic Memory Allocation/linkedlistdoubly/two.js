class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function deleteNode(head, key) {

    if (head === null) {
        return null;
    }

    let current = head;
 
    while (current !== null && current.data !== key) {
        current = current.next;
    }

    if (current === null) {
        return head;
    }

    if (current === head) {
        head = current.next;
    }

    
    if (current.next !== null) {
        current.next.prev = current.prev;
    }

    
    if (current.prev !== null) {
        current.prev.next = current.next;
    }

    return head;
}


let head1 = new Node(1);
let second = new Node(2);
let third = new Node(3);

head1.next = second;
second.prev = head1;

second.next = third;
third.prev = second;

head1 = deleteNode(head1, 2);

while (head1 !== null) {
    console.log(head1.data);
    head1 = head1.next;
}