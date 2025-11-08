function lengthOfLongestSubstring(s: string): number {
    const memo = new Set<string>();

    let ans = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        const c = s[r];
        if (memo.has(c)) {
            while (s[l] !== c) {
                memo.delete(s[l]);
                l++;
            }
            memo.delete(s[l]);
            l++;
        }
        memo.add(c);
        if (r - l + 1 > ans) {
            ans = r - l + 1;
        }
    }

    return ans;
};

const solution1 = lengthOfLongestSubstring;

export {};
