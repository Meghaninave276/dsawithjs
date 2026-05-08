class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inorderRecursive(root) {
    if (root === null) {
        return;
    }

    inorderRecursive(root.left);
    console.log(root.data);
    inorderRecursive(root.right);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inorderRecursive(root);