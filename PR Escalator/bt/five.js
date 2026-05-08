class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBalanced(root) {

    function checkHeight(node) {

        if (node === null) {
            return 0;
        }

        let left = checkHeight(node.left);

        if (left === -1) {
            return -1;
        }

        let right = checkHeight(node.right);

        if (right === -1) {
            return -1;
        }

        if (Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }

    return checkHeight(root) !== -1;
}

// Example
let root4 = new Node(1);
root4.left = new Node(2);
root4.right = new Node(3);
root4.left.left = new Node(4);

console.log(isBalanced(root4));