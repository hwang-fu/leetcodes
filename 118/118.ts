function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  let ans: number[][] = [[1]];
  for (let r = 1; r < numRows; r++) {
    const prev: number[] = ans[r-1];
    const curr: number[] = Array(r + 1).fill(0).map((_, idx) => (idx === 0 || idx === r) ? 1 : 0);
    for (let i = 0; i < prev.length - 1; i++) {
      curr[i+1] = prev[i] + prev[i+1];
    }
    ans.push(curr);
  }

  return ans;
};

function generate2(numRows: number): number[][] {
  // combinatorial formula
  let ans: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [1];
    for (let j = 1; j <= i; j++) {
      row.push(row[j-1] * (i - j + 1) / j);
    }
    ans.push(row);
  }

  return ans;
};

export {};
