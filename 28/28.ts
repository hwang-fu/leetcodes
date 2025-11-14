function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }

    const buildLPS = (pattern: string): number[] => {
        const lps: number[] = new Array(pattern.length).fill(0);

        let len = 0; // length of the previous longest prefix suffix.
        let i = 1;

        while (i < pattern.length) {
            if (pattern[i] === pattern[len]) {
                lps[i++] = ++len;
            }
            else {
                if (len !== 0) {
                    len = lps[len - 1];
                }
                else {
                    lps[i++] = 0;
                }
            }
        }

        return lps;
    };

    const lps = buildLPS(needle);
    let i = 0; // index in haystack.
    let j = 0; // index in needle.

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;

            if (j === needle.length) {
                return i - j;
            }
        }
        else {
            if (j !== 0) {
                j = lps[j - 1];
            }
            else {
                i++;
            }
        }
    }

    return -1;
};

const strStr1 = strStr;

export {};
