function maxSubArray(nums: number[]): number {
  // Constraints:
  // 1 <= nums.length <= 105
  // -104 <= nums[i] <= 104

  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }

  let best = -Infinity;
  for (let windowSize = 1; windowSize <= n; windowSize++) {
    for (let start = 0; start <= n - windowSize; start++) {
      let value = nums.slice(start, start + windowSize).reduce((acc, num) => acc + num, 0);
      best = Math.max(best, value);
    }
  }

  return best;
};

function maxSubArray2(nums: number[]): number {
  // Constraints:
  // 1 <= nums.length <= 105
  // -104 <= nums[i] <= 104

  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }

  let curr = nums[0];
  let best = nums[0];
  for (let i = 1; i < n; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    best = Math.max(best, curr);
  }

  return best;
};

export {};
