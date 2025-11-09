function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const ans: number[][] = [];
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const target = -nums[i];
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            const sum = nums[l] + nums[r];
            if (sum < target) {
                l++;
            }
            else if (sum > target) {
                r--;
            }
            else {
                ans.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l-1]) l++;
                while (l < r && nums[r] === nums[r+1]) r--;
            }
        }
    }

    return ans;
};

const solve1 = threeSum;

export {};
