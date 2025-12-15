function getRow(rowIndex: number): number[] {
  let ans: number[] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const prev = ans;
    ans = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      ans[j] = prev[j-1] + prev[j];
    }
  }

  return ans;
};

function getRow2(rowIndex: number): number[] {
  let ans: number[] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      ans[j] = ans[j] + ans[j - 1];
    }
    ans.push(1);
  }

  return ans;
};

export {};
