function longestPalindrome(s: string): string {
    const expandAroundCenter = (l: number, r: number): number => {
        while (l >= 0 && r <= s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return r - l - 1;
    };

    let l = 0;
    let r = 0;

    for (let i = 0; i < s.length; i++) {
        const odd  = expandAroundCenter(i, i);
        const even = expandAroundCenter(i, i + 1);

        const max = Math.max(odd, even);
        if (max > r - l + 1) {
            l = i - Math.floor((max - 1) / 2);
            r = i + Math.floor(max / 2);
        }
    }

    return s.substring(l, r + 1);
};

const solution1 = longestPalindrome;

export {};
