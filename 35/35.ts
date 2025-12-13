function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l++;
    } else if (nums[m] > target) {
      r--;
    } else {
      return m;
    }
  }

  const m = (l + r) / 2;

  return nums[m] >= target ? m - 1 : m + 1;
};

export {};
