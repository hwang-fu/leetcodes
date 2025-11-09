function removeDuplicates(nums: number[]): number {
    let l = 0;
    for (let r = 1; r < nums.length; r++) {
        if (nums[l] !== nums[r]) {
            l++;
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }
    }

    return l + 1;
};

const solve1 = removeDuplicates;

export {};
