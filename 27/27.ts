function removeElement(nums: number[], val: number): number {
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === val) {
            continue;
        }

        nums[l] = nums[r];
        l++;
    }

    return l;
};

const removeElement1 = removeElement;

export {};
