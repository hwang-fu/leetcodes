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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) {
    return [];
  }

  const ans: number[][] = [];

  const isLeaf = (node: TreeNode) => node.right === null && node.left === null;

  const backtrack = (node: TreeNode, rest: number, curr: number[]) => {
    const val = node.val;

    if (rest === val) {
      if (isLeaf(node)) {
        ans.push([...curr, val]);
        return;
      }
    }

    if (node.left) {
      backtrack(node.left, rest - val, [...curr, val]);
    }

    if (node.right) {
      backtrack(node.right, rest - val, [...curr, val]);
    }
  };

  backtrack(root, targetSum, []);

  return ans;
};

export {};
