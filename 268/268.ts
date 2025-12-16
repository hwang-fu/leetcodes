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

function missingNumber2(nums: number[]): number {
  const n = nums.length;
  let xor = nums.length;
  for (let i = 0; i < n; i++) {
    xor ^= (i ^ nums[i]);
  }
  return xor;
};

export {};
