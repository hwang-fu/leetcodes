function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size !== nums.length;
};

function containsDuplicate2(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

export {};
