 class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const ans: number[] = [];

  const backtrack = (node: TreeNode) => {
    if (node.left) {
      backtrack(node.left);
    }
    ans.push(node.val);
    if (node.right) {
      backtrack(node.right);
    }
  };

  backtrack(root);

  return ans;
};

export {};
