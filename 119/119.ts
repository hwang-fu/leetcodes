function getRow(rowIndex: number): number[] {
  let ans: number[] = [1];

  for (let i = 0; i <= rowIndex; i++) {
    const prev = ans;
    ans = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      ans[j] = prev[j-1] + prev[j];
    }
  }

  return ans;
};

export {};
