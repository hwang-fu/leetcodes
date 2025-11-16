function countAndSay(n: number): string {
    if (n === 1) {
        return "1";
    }

    const s = countAndSay(n - 1);
    const len = s.length;

    let ans = '';

    let count = 0;
    for (let i = 0; i < len; i++) {
        count++;
        if (i < len - 1 && s[i] === s[i+1]) {
            continue;
        }
        ans += (count + '' + s[i]);
        count = 0;
    }

    if (count !== 0) {
        ans += (count + '' + s[len-1]);
    }

    return ans;
};

const countAndSayRecursive = countAndSay;

export {};
