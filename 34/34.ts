function searchRange(nums: number[], target: number): number[] {
  const ans = [-1, -1];

  const searchRangeLeft = (r: number) => {
    let l = 0;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        if (m === 0 || nums[m - 1] !== target) {
          break;
        } else {
          r = m - 1;
        }
      }
    }

    return Math.floor((l + r) / 2);
  };

  const searchRangeRight = (l: number) => {
    let r = nums.length - 1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        if (m === nums.length - 1 || nums[m + 1] !== target) {
          break;
        } else {
          l = m + 1;
        }
      }
    }

    return Math.floor((l + r) / 2);
  };

  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      ans[0] = searchRangeLeft(m);
      ans[1] = searchRangeRight(m);
      break;
    }

  }

  return ans;
};

export {};
