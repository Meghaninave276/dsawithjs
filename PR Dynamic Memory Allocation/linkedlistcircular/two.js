class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteNode(head, key) {

    if (head === null) {
        return null;
    }

    let current = head;
    let prev = null;

    
    if (head.data === key && head.next === head) {
        return null;
    }

 
    if (head.data === key) {

        while (current.next !== head) {
            current = current.next;
        }

        current.next = head.next;
        return head.next;
    }

    prev = head;
    current = head.next;

    while (current !== head) {

        if (current.data === key) {
            prev.next = current.next;
            return head;
        }

        prev = current;
        current = current.next;
    }

    return head;
}

let head1 = new Node(1);
let second = new Node(2);
let third = new Node(3);

head1.next = second;
second.next = third;
third.next = head1;

head1 = deleteNode(head1, 2);

let temp1 = head1;

do {
    console.log(temp1.data);
    temp1 = temp1.next;
} while (temp1 !== head1);