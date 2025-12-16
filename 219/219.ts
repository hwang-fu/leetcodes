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

export {};
