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

const countAndSayIterative = (n: number): string => {
    if (n === 1) {
        return '1';
    }

    let ans = '1';

    while (n > 1) {
        const len = ans.length;
        let temp  = '';

        let count = 0;
        for (let i = 0; i < len; i++) {
            count++;
            if (i < len - 1 && ans[i] === ans[i+1]) {
                continue;
            }
            temp += (count + '' + ans[i]);
            count = 0;
        }

        if (count) {
            temp += (count + '' + ans[len-1]);
        }
        ans = temp;
        n--;
    }


    return ans;
};

export {};
