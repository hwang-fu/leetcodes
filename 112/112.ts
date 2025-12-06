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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  const isLeaf = (node: TreeNode): boolean => {
    return (node.left === null) && (node.right === null);
  }

  const stack: TreeNode[] = [];
  const dps = (node: TreeNode, sum: number): boolean => {
    const val = node.val;

    if (isLeaf(node)) {
      return targetSum === (sum + val);
    }

    if (node.left && dps(node.left, sum + val)) {
      return true;
    }

    if (node.right && dps(node.right, sum + val)) {
      return true;
    }

    return false;
  };

  return dps(root, 0);
};

export {};
