function minimumTotal(triangle: number[][]): number {
  // 1 <= triangle.length <= 200

  const numRows = triangle.length;
  if (numRows === 1) {
    return triangle[0][0];
  }

  for (let i = 1; i < numRows; i++) {
    const row = triangle[i];
    for (let j = 0; j < row.length; j++) {
      const prevRow = triangle[i-1];
      const left = prevRow[j-1] ?? Infinity;
      const right = prevRow[j] ?? Infinity;
      row[j] += Math.min(left, right);
    }
  }

  return triangle[numRows].reduce((prev, curr) => prev < curr ? prev : curr);
};

export {};
