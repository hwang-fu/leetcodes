/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const n  = nums.length;
    if (n === 1) {
        return;
    }

    let l = 0;
    let r = 0;
    for (r = 0; r < n; r++) {
        if (nums[r] === 0) {
            continue;
        }
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
    }
};

const moveZeroes1 = moveZeroes;

export {};
