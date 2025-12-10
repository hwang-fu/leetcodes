function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums);
  let best = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) {
        len++;
      }
      best = Math.max(best, len);
    }
  }

  return best;
};

export {};
