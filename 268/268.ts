function missingNumber(nums: number[]): number {
  const n = nums.length;
  const set = new Set<number>(nums);
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  throw Error('unreachable');
};

export {};
