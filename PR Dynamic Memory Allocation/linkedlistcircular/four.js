class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function splitList(head) {

    if (head === null || head.next === head) {
        return [head, null];
    }

    let slow = head;
    let fast = head;

    while (
        fast.next !== head &&
        fast.next.next !== head
    ) {
        slow = slow.next;
        fast = fast.next.next;
    }

    
    if (fast.next.next === head) {
        fast = fast.next;
    }

    let head1 = head;
    let head2 = slow.next;

   
    fast.next = head2;

  
    slow.next = head1;

    return [head1, head2];
}


let head3 = new Node(1);
head3.next = new Node(2);
head3.next.next = new Node(3);
head3.next.next.next = new Node(4);

head3.next.next.next.next = head3;

let [firstHalf, secondHalf] = splitList(head3);


let temp2 = firstHalf;

do {
    console.log(temp2.data);
    temp2 = temp2.next;
} while (temp2 !== firstHalf);

console.log("----");


temp2 = secondHalf;

do {
    console.log(temp2.data);
    temp2 = temp2.next;
} while (temp2 !== secondHalf);