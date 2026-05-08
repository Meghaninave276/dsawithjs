class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function reverseDLL(head) {
    let current = head;
    let temp = null;

    while (current !== null) {

        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        current = current.prev;
    }

    // Update head
    if (temp !== null) {
        head = temp.prev;
    }

    return head;
}


let head2 = new Node(1);
head2.next = new Node(2);
head2.next.prev = head2;

head2.next.next = new Node(3);
head2.next.next.prev = head2.next;

let reversed = reverseDLL(head2);

while (reversed !== null) {
    console.log(reversed.data);
    reversed = reversed.next;
}