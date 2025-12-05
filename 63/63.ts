function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
    return 0;
  }

  const map = new Map<string, number>();

  const backtrack = (row: number, column: number): number => {
    if (row === m - 1 && column === n - 1) {
      return 1;
    }

    const key = `${row},${column}`;
    if (map.has(key)) {
      return map.get(key)!;
    }

    let paths = 0;

    if (column < n - 1 && obstacleGrid[row][column + 1] === 0) {
      paths += backtrack(row, column + 1);
    }

    if (row < m - 1 && obstacleGrid[row + 1][column] === 0) {
      paths += backtrack(row + 1, column);
    }

    map.set(key, paths);

    return paths;
  };

  return backtrack(0, 0);
};

export {};
