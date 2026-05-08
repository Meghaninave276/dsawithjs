class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function mergeSortedLists(list1, list2) {
    let dummy = new Node(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {

        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

  
    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
}


let l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);

let l2 = new Node(2);
l2.next = new Node(4);
l2.next.next = new Node(6);

let merged = mergeSortedLists(l1, l2);

while (merged) {
    console.log(merged.data);
    merged = merged.next;
}