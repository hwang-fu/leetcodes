function maxArea(height: number[]): number {
    let ans = 0;

    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        const L = height[l];
        const R = height[r];
        const width = r - l;
        const area = width * Math.min(L, R);
        if (area > ans) {
            ans = area;
        }
        if (L < R) {
            l++;
        }
        else {
            r--;
        }
    }

    return ans;
};

const solve1 = maxArea;

export {};
