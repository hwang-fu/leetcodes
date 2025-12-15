function countBits(n: number): number[] {
  const ans: number[] = [0];
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
};

export {};
