function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let closest = Infinity;

    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        const num = nums[i];
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            const sum = num + nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }
            if (sum < target) {
                l++;
            }
            else if (sum > target) {
                r--;
            }
            else {
                return sum;
            }
        }
    }

    return closest;
};
export {};
