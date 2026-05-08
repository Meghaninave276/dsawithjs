class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function findHeight(root) {

    if (root === null) {
        return 0;
    }

    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}


let root3 = new Node(1);
root3.left = new Node(2);
root3.right = new Node(3);
root3.left.left = new Node(4);

console.log(findHeight(root3));