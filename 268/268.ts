function missingNumber(nums: number[]): number {
  const n = nums.length;
  const set = new Set<number>(nums);
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  throw new Error('unreachable');
};

function missingNumber2(nums: number[]): number {
  const n = nums.length;
  let xor = nums.length;
  for (let i = 0; i < n; i++) {
    // a ^ a = 0
    // a ^ 0 = a
    // Every number that appears twice cancels out, leaving only the missing one.
    xor ^= (i ^ nums[i]);
  }
  return xor;
};

function missingNumber3(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
};

export {};
