function threeSum(nums: number[], target: number, start: number): number[][] {
    const n = nums.length;
    const ans: number[][] = [];
    for (let i = start; i < n - 2; i++) {
        if (i > start && nums[i] === nums[i-1]) continue;
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < target) {
                l++;
            }
            else if (sum > target) {
                r--;
            }
            else {
                ans.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l+1] === nums[l]) l++;
                while (l < r && nums[r-1] === nums[r]) r--;
                l++;
                r--;
            }
        }
    }

    return ans;
};

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);

    const ans = [];
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        const res = threeSum(nums, target - nums[i], i + 1);
        if (res.length === 0) {
            continue;
        }
        for (const arr of res) {
            ans.push([nums[i], ...arr]);
        }
    }

    return ans;
};

const solve1 = fourSum;

const solve2 = (nums: number[], target: number): number[][] => {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const ans: number[][] = [];

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const min = nums[i] + nums[i+1] + nums[i+2] + nums[i+3];
        if (min > target) break; // further `i` will only be larger.

        const max = nums[i] + nums[n-3] + nums[n-2] + nums[n-1];
        if (max < target) continue; // this `i` is too small, move on.

        const triplets = threeSum(nums, target - nums[i], i + 1);
        for (const triplet of triplets) {
            ans.push([nums[i], ...triplet]);
        }
    }

    return ans;
};

export {};
