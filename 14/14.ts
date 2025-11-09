function longestCommonPrefix(strs: string[]): string {
    if (strs[0].length === 0) {
        return "";
    }

    let ans = strs[0];
    for (let k = 1; k < strs.length; k++) {
        const str = strs[k];
        if (str.length === 0) {
            return "";
        }

        let i = 0;
        for (i = 0; i < Math.min(ans.length, str.length); i++) {
            if (ans[i] !== str[i]) {
                break;
            }
        }
        ans = ans.slice(0, i);
    }
    return ans;
};

const solve1 = longestCommonPrefix;

export {};
