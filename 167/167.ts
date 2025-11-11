function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum < target) {
            l++;
            while (l < r && numbers[l] === numbers[l-1]) l++;
        }
        else if (sum > target) {
            r--;
            while (l < r && numbers[r] === numbers[r+1]) r--;
        }
        else {
            return [l + 1, r + 1];
        }
    }

    return [];
};

const twoSum1 = twoSum;

export {};
