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

function pathSum2(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) {
    return [];
  }

  const ans: number[][] = [];
  const path: number[] = [];

  type Frame = { node: TreeNode; rest: number; visited: boolean };

  const stack: Frame[] = [
    { node: root, rest: targetSum, visited: false },
  ];

  while (stack.length) {
    const { node, rest, visited } = stack.pop()!;

    if (visited) {
      path.pop();
      continue;
    }

    // pre-order: enter node
    const val = node.val;
    path.push(val);
    const next = rest - val;

    // post-order marker to pop later
    stack.push({ node, rest, visited: true });

    if (!node.left && !node.right) {
      if (next === 0) {
        ans.push(path.slice());
      }
      continue;
    }

    // right push first so left is processed earlier.
    if (node.right) {
      stack.push({ node: node.right, rest: next, visited: false });
    }
    if (node.left) {
      stack.push({ node: node.left, rest: next, visited: false });
    }
  }

  return ans;
};

export {};
