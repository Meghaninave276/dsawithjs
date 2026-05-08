class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function findPairs(head, target) {
    let left = head;
    let right = head;

   
    while (right.next !== null) {
        right = right.next;
    }

    let result = [];

    while (
        left !== right &&
        right.next !== left
    ) {

        let sum = left.data + right.data;

        if (sum === target) {
            result.push([left.data, right.data]);

            left = left.next;
            right = right.prev;
        }
        else if (sum < target) {
            left = left.next;
        }
        else {
            right = right.prev;
        }
    }

    return result;
}

let head3 = new Node(1);
head3.next = new Node(2);
head3.next.prev = head3;

head3.next.next = new Node(4);
head3.next.next.prev = head3.next;

head3.next.next.next = new Node(5);
head3.next.next.next.prev = head3.next.next;

head3.next.next.next.next = new Node(6);
head3.next.next.next.next.prev = head3.next.next.next;

console.log(findPairs(head3, 7));