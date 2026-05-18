class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;

    current.next = prev;

    prev = current;
    current = nextNode;
  }

  return prev;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let reversed = reverseList(head);

while (reversed !== null) {
  console.log(reversed.val);
  reversed = reversed.next;
}
