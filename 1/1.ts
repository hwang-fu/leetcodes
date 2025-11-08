function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const solution1 = twoSum;

const solution2 = (nums: number[], target: number): number[] => {
    const memo = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (memo.has(diff)) {
            return [memo.get(diff), i];
        }
        else {
            memo.set(nums[i], i);
        }
    }
}

export {};
