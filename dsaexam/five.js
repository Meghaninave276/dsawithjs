class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  if (root === null) return;

  console.log(root.val);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

preorderTraversal(root);
