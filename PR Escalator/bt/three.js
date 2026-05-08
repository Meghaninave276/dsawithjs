class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function postorderTraversal(root) {
    if (root === null) {
        return;
    }

    postorderTraversal(root.left);
    postorderTraversal(root.right);

    console.log(root.data);
}


let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

postorderTraversal(root2);