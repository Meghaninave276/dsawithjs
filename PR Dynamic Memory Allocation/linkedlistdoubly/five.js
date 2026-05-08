class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function removeDuplicates(head) {
    let current = head;

    while (current !== null && current.next !== null) {

        if (current.data === current.next.data) {

            let duplicate = current.next;

            current.next = duplicate.next;

            if (duplicate.next !== null) {
                duplicate.next.prev = current;
            }
        }
        else {
            current = current.next;
        }
    }

    return head;
}


let head4 = new Node(1);

head4.next = new Node(1);
head4.next.prev = head4;

head4.next.next = new Node(2);
head4.next.next.prev = head4.next;

head4.next.next.next = new Node(2);
head4.next.next.next.prev = head4.next.next;

head4 = removeDuplicates(head4);

while (head4 !== null) {
    console.log(head4.data);
    head4 = head4.next;
}