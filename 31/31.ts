/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;
    if (n <= 1) {
        return;
    }

    // Find the first index `i` from the right where nums[i] < nums[i+1]
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Find the right-most elem which is greater than nums[i]
        let j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the suffix from i + 1 to the end.
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
};

const nextPermutation1 = nextPermutation;

export {};
