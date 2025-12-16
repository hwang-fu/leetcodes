function majorityElement(nums: number[]): number {
  const n = nums.length;
  const threshold = Math.floor(n / 2);

  const count = new Map<number, number>();
  for (const num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  for (const [k, v] of count.entries()) {
    if (v > threshold) {
      return k;
    }
  }

  throw new Error('unreachable');
};

export {};
