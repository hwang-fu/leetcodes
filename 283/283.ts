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

const moveZeroes2 = (nums: number[]): void => {
    // 1. move all non-zero elements to the front.
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[i] !== 0) {
            nums[l++] = nums[r];
        }
    }

    // 2. fill the rest with zeros.
    while (l < nums.length) {
        nums[l++] = 0;
    }
};

export {};
