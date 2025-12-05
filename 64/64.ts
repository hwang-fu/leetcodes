function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const memo: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));

  const backtrack = (i: number, j: number): number => {
    if (i === 0 && j === 0) {
      return grid[0][0];
    }

    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    let sum = grid[i][j];

    if (i > 0 && j > 0) {
      sum += Math.min(backtrack(i - 1, j), backtrack(i, j - 1));
    }
    else if (i > 0) {
      sum += backtrack(i - 1, j);
    }
    else if (j > 0) {
      sum += backtrack(i, j - 1);
    }

    memo[i][j] = sum;

    return sum;
  };

  return backtrack(m - 1, n - 1);
};

function minPathSum2(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  // buttom-up
  dp[0][0] = grid[0][0];

  // fill 1st row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j];
  }

  // fill 1st column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0];
  }

  // fill rest
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
    }
  }

  return dp[m-1][n-1];
};

export {};
