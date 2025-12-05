function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const map = new Map<string, number>();

  const backtrack = (i: number, j: number): number => {
    if (m === 0 && n === 0) {
      return grid[0][0];
    }

    const key = `${i},${j}`;
    if (map.has(key)) {
      return map.get(key)!;
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

    map.set(key, sum);

    return sum;
  };

  return backtrack(m - 1, n - 1);
};

export {};
