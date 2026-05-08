class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new Node(0);
    dummy.next = head;

    let first = dummy;
    let second = dummy;

  
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    
    second.next = second.next.next;

    return dummy.next;
}


let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(5);

let updatedHead = removeNthFromEnd(head2, 2);

while (updatedHead) {
    console.log(updatedHead.data);
    updatedHead = updatedHead.next;
}