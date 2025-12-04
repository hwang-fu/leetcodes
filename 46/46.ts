function permute(nums: number[]): number[][] {
  const ans: number[][] = [];

  const swap = (arr: number[], i: number, j: number) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const backtrack = (current: number[], index: number) => {
    if (index === nums.length) {
      ans.push(current);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      swap(current, i, index);
      backtrack(current, index + 1);
      swap(current, i, index);
    }
  }

  backtrack(nums, 0);

  return ans;
};

export {};
