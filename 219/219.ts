function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const lastIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (lastIndex.has(nums[i]) && (i - lastIndex.get(nums[i])! <= k)) {
      return true;
    }
    lastIndex.set(nums[i], i);
  }

  return false;
};

function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }

    window.add(nums[i]);
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
};

export {};
