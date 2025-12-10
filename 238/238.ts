function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = [];

  let left = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];
  }

  return ans;
};

export {};
