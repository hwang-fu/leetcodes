function minimumTotal(triangle: number[][]): number {
  // 1 <= triangle.length <= 200

  const numRows = triangle.length;

  for (let i = 1; i < numRows; i++) {
    const row = triangle[i];
    for (let j = 0; j < row.length; j++) {
      const prevRow = triangle[i-1];
      const left = prevRow[j-1] ?? Infinity;
      const right = prevRow[j] ?? Infinity;
      row[j] += Math.min(left, right);
    }
  }

  return Math.min(...triangle[numRows - 1]);
};

function minimumTotal2(triangle: number[][]): number {
  // bottom-up
  const numRows = triangle.length;
  for (let i = numRows - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]);
    }
  }
  return triangle[0][0];
};

export {};
