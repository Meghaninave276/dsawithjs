class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root) {
    if (root === null) {
        return;
    }

    console.log(root.data);

    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

// Example
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

preorderTraversal(root1);