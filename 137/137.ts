function singleNumber(nums: number[]): number {
  let ans = 0;

  // 32 bits for signed integer
  for (let i = 0; i < 32; i++) {
    let count  = 0;

    for (const num of nums) {
      if ((num >> i) & 1) {
        count++;
      }
    }

    if (count % 3 === 1) {
      ans |= (1 << i);
    }
  }

  return ans;
};

export {};
